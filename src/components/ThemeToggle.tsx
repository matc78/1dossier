import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../theme";
import type { ThemePreference } from "../theme";

const ThemeToggle = () => {
  const { themePreference, setThemePreference } = useTheme();

  const preferences: {
    value: ThemePreference;
    icon: typeof Sun;
    label: string;
  }[] = [
    { value: "light", icon: Sun, label: "Clair" },
    { value: "dark", icon: Moon, label: "Sombre" },
    { value: "system", icon: Monitor, label: "Système" },
  ];

  return (
    <div className="flex items-center gap-1 md:gap-2 p-1 rounded-lg">
      {preferences.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setThemePreference(value)}
          className={`p-1.5 md:p-2 rounded-md transition-all duration-200 ${
            themePreference === value
              ? "shadow-md"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          style={{
            backgroundColor:
              themePreference === value ? "#2bff9b" : "transparent",
            color: themePreference === value ? "#ffffff" : "#6b7280",
          }}
          title={label}
        >
          <Icon className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
