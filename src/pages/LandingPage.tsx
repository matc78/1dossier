import { Heart } from "lucide-react";
import { useTheme } from "../theme";
import ThemeToggle from "../components/ThemeToggle";

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className="h-screen relative flex flex-col"
      style={{ background: theme.colors.background }}
    >
      {/* Toggle de thème en haut à droite */}
      <div
        className="z-10"
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          zIndex: 1000,
        }}
        // Responsive: plus petit espacement sur mobile
      >
        <ThemeToggle />
      </div>

      {/* Contenu principal centré - flex-1 pour prendre l'espace disponible */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Logo et nom de l'app */}
        <div className="flex items-center space-x-3 mb-4 md:mb-6">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          >
            <Heart
              className="w-6 h-6 md:w-7 md:h-7"
              style={{ color: theme.colors.background }}
            />
          </div>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: theme.colors.text }}
          >
            1Dossier1Vie
          </h1>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-row gap-3 md:gap-4 items-center justify-center">
          <button
            className="py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-base md:text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              background: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            Se connecter
          </button>

          <button
            className="py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-base md:text-lg transition-all duration-200 hover:scale-105 border-2"
            style={{
              borderColor: theme.colors.primary,
              color: theme.colors.text,
              background: "transparent",
            }}
          >
            S'inscrire
          </button>
        </div>
      </div>

      {/* Footer discret - en position relative en bas */}
      <div
        className="text-xs md:text-sm text-center py-4 px-4"
        style={{ color: theme.colors.text, opacity: 0.5 }}
      >
        Simplifiez votre parcours médical
      </div>
    </div>
  );
};

export default LandingPage;
