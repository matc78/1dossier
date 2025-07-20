import { type ColorScheme } from "./colors";

/**
 * Génère les classes Tailwind adaptées au schéma de couleur actuel
 */
export const getThemeClasses = (colorScheme: ColorScheme) => {
  const isDark = colorScheme === "dark";

  return {
    // Backgrounds
    background: isDark ? "bg-background-dark" : "bg-background-light",
    primary: "bg-primary",
    secondary: isDark ? "bg-secondary-dark" : "bg-secondary-light",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",

    // Text colors
    text: isDark ? "text-text-dark" : "text-text-light",
    textPrimary: "text-primary",
    textSuccess: "text-success",
    textWarning: "text-warning",
    textDanger: "text-danger",

    // Borders
    border: isDark ? "border-border-dark" : "border-border-light",
    borderPrimary: "border-primary",

    // Combined utilities
    card: `${isDark ? "bg-secondary-dark" : "bg-secondary-light"} ${
      isDark ? "border-border-dark" : "border-border-light"
    } border rounded-lg`,
    button: {
      primary: `bg-primary hover:bg-primary/90 ${
        isDark ? "text-background-dark" : "text-background-light"
      } font-medium px-4 py-2 rounded transition-colors`,
      secondary: `${
        isDark
          ? "bg-secondary-dark hover:bg-secondary-dark/90"
          : "bg-secondary-light hover:bg-secondary-light/90"
      } ${
        isDark ? "text-text-dark" : "text-text-light"
      } font-medium px-4 py-2 rounded transition-colors`,
      success: `bg-success hover:bg-success/90 text-white font-medium px-4 py-2 rounded transition-colors`,
      warning: `bg-warning hover:bg-warning/90 text-black font-medium px-4 py-2 rounded transition-colors`,
      danger: `bg-danger hover:bg-danger/90 text-white font-medium px-4 py-2 rounded transition-colors`,
    },
  };
};

/**
 * Hook pour obtenir facilement les classes Tailwind thématiques
 */
export const useThemeClasses = (colorScheme: ColorScheme) => {
  return getThemeClasses(colorScheme);
};
