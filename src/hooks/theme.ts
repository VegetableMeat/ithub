import React from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/use-layout-effect";
import { ThemeContext } from "@/context/theme";
import {
  Theme,
  getTheme,
  saveTheme,
  setLightTheme,
  setDarkTheme,
} from "@/libs/theme";

export const useTheme = (): ThemeContext => {
  const [theme, setTheme] = React.useState<Theme>("light");

  useIsomorphicLayoutEffect(() => {
    setTheme(getTheme());
  }, []);

  useIsomorphicLayoutEffect(() => {
    saveTheme(theme);
    theme === "light" ? setLightTheme() : setDarkTheme();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
