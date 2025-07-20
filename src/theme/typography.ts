export const typography = {
  fontFamily: {
    regular: "Inter_400Regular",
    bold: "Inter_700Bold",
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    title: 32,
  },
};

export type FontFamily = keyof typeof typography.fontFamily;
export type FontSize = keyof typeof typography.fontSize;
