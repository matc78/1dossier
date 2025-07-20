# Système de Thème

Ce projet utilise un système de thème personnalisé avec support du mode sombre/clair, TypeScript et Tailwind CSS.

## 🎨 Structure

```
src/theme/
├── colors.ts          # Définition des couleurs pour les modes clair/sombre
├── typography.ts      # Configuration de la typographie
├── index.ts           # Point d'entrée principal
├── ThemeProvider.tsx  # Composant provider React
├── useTheme.ts        # Hook pour consommer le thème
└── tailwindUtils.ts   # Utilitaires Tailwind CSS
```

## 🚀 Utilisation

### 1. Configuration de base

```tsx
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider defaultScheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Utilisation du hook

```tsx
import { useTheme } from "./theme";

function MyComponent() {
  const { theme, colorScheme, toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.background }}>
      <button onClick={toggleTheme}>
        Basculer vers {colorScheme === "light" ? "sombre" : "clair"}
      </button>
    </div>
  );
}
```

### 3. Avec Tailwind CSS

```tsx
import { useTheme, useThemeClasses } from "./theme";

function MyComponent() {
  const { colorScheme } = useTheme();
  const classes = useThemeClasses(colorScheme);

  return (
    <div className={classes.background}>
      <button className={classes.button.primary}>Bouton primaire</button>
    </div>
  );
}
```

## 🎨 Couleurs disponibles

### Mode clair

- Primary: #2bff9b (vert vif)
- Background: #ffffff
- Text: #1a1a1a
- Secondary: #a7f3d0 (vert menthe doux)
- Success: #22c55e
- Warning: #facc15
- Danger: #ef4444
- Border: #e5e7eb

### Mode sombre

- Primary: #2bff9b (identique)
- Background: #000000
- Text: #ffffff
- Secondary: #064e3b (vert foncé apaisant)
- Success: #22c55e (identique)
- Warning: #facc15 (identique)
- Danger: #ef4444 (identique)
- Border: #4b5563

## 📝 Typographie

- **Familles**: Inter Regular (400), Inter Bold (700)
- **Tailles**: xs(12px), sm(14px), md(16px), lg(20px), xl(24px), title(32px)

## 🔧 Fonctionnalités

- ✅ Persistance automatique dans localStorage
- ✅ Variables CSS custom properties automatiques
- ✅ Support Tailwind CSS avec mode sombre
- ✅ TypeScript strict
- ✅ Hook React pour usage facile
- ✅ Utilitaires Tailwind pré-configurés
- ✅ Fast Refresh compatible

## 🌓 Classes Tailwind personnalisées

Les couleurs sont disponibles dans Tailwind sous ces noms :

- `bg-primary`, `text-primary`, `border-primary`
- `bg-background-light`, `bg-background-dark`
- `text-text-light`, `text-text-dark`
- `bg-secondary-light`, `bg-secondary-dark`
- `bg-success`, `bg-warning`, `bg-danger`

Mode sombre activé avec la classe `dark` sur `<html>`.
