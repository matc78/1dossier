/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Permet l'utilisation de la classe 'dark' pour le mode sombre
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées de votre thème
        primary: {
          DEFAULT: "#2bff9b",
          light: "#2bff9b",
          dark: "#2bff9b",
        },
        secondary: {
          light: "#a7f3d0",
          dark: "#064e3b",
        },
        success: "#22c55e",
        warning: "#facc15",
        danger: "#ef4444",
        // Couleurs adaptives qui changent selon le mode
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        text: {
          light: "#1a1a1a",
          dark: "#ffffff",
        },
        border: {
          light: "#e5e7eb",
          dark: "#4b5563",
        },
      },
      fontFamily: {
        "inter-regular": ["Inter_400Regular", "system-ui", "sans-serif"],
        "inter-bold": ["Inter_700Bold", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        title: "32px",
      },
    },
  },
  plugins: [],
};
