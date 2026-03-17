import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
