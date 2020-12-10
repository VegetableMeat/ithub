import { createContext, useContext } from "react";

export type ThemeContext = {
	theme: "light" | "dark";
	toggleTheme: () => void;
};

const defaultContext: ThemeContext = {
	theme: "light",
	toggleTheme: () => {},
};

export const themeContext = createContext<ThemeContext>(defaultContext);

export const useToggleTheme = () => useContext(themeContext);
