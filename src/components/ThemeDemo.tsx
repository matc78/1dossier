import React from "react";
import { useTheme } from "../theme";

export const ThemeDemo: React.FC = () => {
  const { theme, colorScheme, toggleTheme } = useTheme();

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{
            color: theme.colors.text,
            fontSize: theme.typography.fontSize.xl,
          }}
        >
          Démonstration du thème
        </h2>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          {colorScheme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Palette de couleurs */}
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: theme.colors.secondary,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <h3 className="font-bold mb-3" style={{ color: theme.colors.text }}>
            Palette de couleurs
          </h3>

          <div className="space-y-2">
            {Object.entries(theme.colors).map(([name, color]) => (
              <div key={name} className="flex items-center space-x-3">
                <div
                  className="w-6 h-6 rounded border"
                  style={{ backgroundColor: color }}
                />
                <span style={{ color: theme.colors.text }}>
                  {name}: {color}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Typographie */}
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: theme.colors.secondary,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <h3 className="font-bold mb-3" style={{ color: theme.colors.text }}>
            Typographie
          </h3>

          <div className="space-y-2">
            {Object.entries(theme.typography.fontSize).map(([name, size]) => (
              <div key={name} style={{ color: theme.colors.text }}>
                <span style={{ fontSize: `${size}px` }}>
                  {name}: {size}px - Exemple de texte
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Boutons de démonstration */}
      <div className="flex flex-wrap gap-3">
        <button
          className="px-4 py-2 rounded transition-colors"
          style={{
            backgroundColor: theme.colors.success,
            color: theme.colors.background,
          }}
        >
          Succès
        </button>

        <button
          className="px-4 py-2 rounded transition-colors"
          style={{
            backgroundColor: theme.colors.warning,
            color: theme.colors.background,
          }}
        >
          Attention
        </button>

        <button
          className="px-4 py-2 rounded transition-colors"
          style={{
            backgroundColor: theme.colors.danger,
            color: theme.colors.background,
          }}
        >
          Erreur
        </button>
      </div>
    </div>
  );
};
