export const colors = {
  light: {
    primary: "#2bff9b",
    background: "#ffffff",
    text: "#1a1a1a",
    secondary: "#a7f3d0", // vert menthe doux
    success: "#22c55e", // vert validation
    warning: "#facc15", // jaune doux
    danger: "#ef4444", // rouge erreur
    border: "#e5e7eb", // gris très clair pour délimiter
  },
  dark: {
    primary: "#2bff9b",
    background: "#000000",
    text: "#ffffff",
    secondary: "#064e3b", // vert foncé apaisant
    success: "#22c55e",
    warning: "#facc15",
    danger: "#ef4444",
    border: "#4b5563",
  },
};

export type ColorScheme = keyof typeof colors;
export type ThemePreference = ColorScheme | "system";
export type ColorName = keyof typeof colors.light;
