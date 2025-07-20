import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import { getTheme, type Theme, type ColorScheme } from "./index";

export interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  toggleTheme: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
  defaultScheme?: ColorScheme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultScheme = "light",
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    // Vérifier le localStorage pour persister le thème
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("color-scheme") as ColorScheme;
      return saved || defaultScheme;
    }
    return defaultScheme;
  });

  const theme = getTheme(colorScheme);

  const toggleTheme = useCallback(() => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // Persister le thème dans localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("color-scheme", colorScheme);
    }
  }, [colorScheme]);

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
      toggleTheme,
      setColorScheme,
    }),
    [theme, colorScheme, toggleTheme, setColorScheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
