import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import {
  getTheme,
  type Theme,
  type ColorScheme,
  type ThemePreference,
} from "./index";

export interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  themePreference: ThemePreference;
  toggleTheme: () => void;
  setThemePreference: (preference: ThemePreference) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
  defaultPreference?: ThemePreference;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultPreference = "system",
}) => {
  // Fonction pour détecter les préférences système
  const getSystemPreference = (): ColorScheme => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // État pour la préférence de l'utilisateur (system, light, dark)
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>(
    () => {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(
          "theme-preference"
        ) as ThemePreference;
        return saved || defaultPreference;
      }
      return defaultPreference;
    }
  );

  // État pour le schéma de couleurs actuel (light ou dark uniquement)
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    if (themePreference === "system") {
      return getSystemPreference();
    }
    return themePreference;
  });

  const theme = getTheme(colorScheme);

  // Fonction pour basculer entre les modes
  const toggleTheme = useCallback(() => {
    if (themePreference === "system") {
      // Si on est en mode système, basculer vers le mode opposé au système
      const systemPref = getSystemPreference();
      const newPref = systemPref === "light" ? "dark" : "light";
      setThemePreferenceState(newPref);
      setColorScheme(newPref);
    } else {
      // Sinon, basculer entre light et dark
      const newPref = themePreference === "light" ? "dark" : "light";
      setThemePreferenceState(newPref);
      setColorScheme(newPref);
    }
  }, [themePreference]);

  // Effet pour persister la préférence
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-preference", themePreference);
    }
  }, [themePreference]);

  // Effet pour écouter les changements des préférences système
  useEffect(() => {
    if (themePreference !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? "dark" : "light");
    };

    // Mise à jour initiale
    setColorScheme(mediaQuery.matches ? "dark" : "light");

    // Écouter les changements
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [themePreference]);

  // Fonction pour définir une préférence spécifique
  const setThemePreference = useCallback((preference: ThemePreference) => {
    setThemePreferenceState(preference);
    if (preference === "system") {
      setColorScheme(getSystemPreference());
    } else {
      setColorScheme(preference);
    }
  }, []);

  // Appliquer les variables CSS globales
  useEffect(() => {
    const root = document.documentElement;

    // Définir les variables CSS custom properties
    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-background", theme.colors.background);
    root.style.setProperty("--color-text", theme.colors.text);
    root.style.setProperty("--color-secondary", theme.colors.secondary);
    root.style.setProperty("--color-success", theme.colors.success);
    root.style.setProperty("--color-warning", theme.colors.warning);
    root.style.setProperty("--color-danger", theme.colors.danger);
    root.style.setProperty("--color-border", theme.colors.border);

    // Appliquer le thème au body
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;

    // Ajouter/supprimer la classe dark pour Tailwind
    if (theme.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const value: ThemeContextType = useMemo(
    () => ({
      theme,
      colorScheme,
      themePreference,
      toggleTheme,
      setThemePreference,
    }),
    [theme, colorScheme, themePreference, toggleTheme, setThemePreference]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
