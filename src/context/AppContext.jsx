import { createContext, useMemo, useState, useEffect } from "react";
import translations from "../data/translations";

export const AppContext = createContext({
  lang: "es",
  setLang: () => {},
  theme: "light",
  toggleTheme: () => {},
  t: (key) => key,
});

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const stored = window.localStorage.getItem("lua_lang");
    return stored === "pt" ? "pt" : "es";
  });
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem("lua_theme");
    return stored === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("lua_lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    window.localStorage.setItem("lua_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const t = (key, vars = {}) => {
    const parts = key.split(".");
    let current = translations[lang];
    for (const part of parts) {
      if (!current) return key;
      current = current[part];
    }
    if (typeof current !== "string") {
      return current;
    }
    return Object.entries(vars).reduce(
      (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), v),
      current
    );
  };

  const value = useMemo(
    () => ({ lang, setLang, theme, toggleTheme, t }),
    [lang, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
