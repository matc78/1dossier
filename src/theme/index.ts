import { colors } from "./colors";
import type { ColorScheme, ThemePreference } from "./colors";
import { typography } from "./typography";

export interface Theme {
  colors: typeof colors.light;
  typography: typeof typography;
  isDark: boolean;
}

export const getTheme = (scheme: ColorScheme): Theme => ({
  colors: colors[scheme],
  typography,
  isDark: scheme === "dark",
});

// Export individual modules
export { colors } from "./colors";
export { typography } from "./typography";
export type { ColorScheme, ThemePreference, ColorName } from "./colors";
export type { FontFamily, FontSize } from "./typography";

// Export theme components
export { ThemeProvider } from "./ThemeProvider";
export type { ThemeContextType } from "./ThemeProvider";
export { useTheme } from "./useTheme";

// Export utilities
export { getThemeClasses, useThemeClasses } from "./tailwindUtils";
