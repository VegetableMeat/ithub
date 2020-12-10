import React from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/use-layout-effect";
import { ThemeContext } from "@/context/theme";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "__initial_theme_state";

const getTheme = (): Theme =>
	(localStorage.getItem(THEME_STORAGE_KEY) ?? "light") as Theme;
const saveTheme = (theme: Theme) =>
	localStorage.setItem(THEME_STORAGE_KEY, theme);

export const setLightTheme = () => {
	document.documentElement.style.setProperty(
		"--header-background-color",
		"#FFF"
	);
	document.documentElement.style.setProperty("--background-color", "#f3f3f3");
	document.documentElement.style.setProperty("--box-background-color", "#FFF");
	document.documentElement.style.setProperty("--accent-color", "#19d3da");
	document.documentElement.style.setProperty("--base-color", "#373a40");
	document.documentElement.style.setProperty("--font-color", "#222222");
	document.documentElement.style.setProperty("--sub-button-color", "#373a40");
	document.documentElement.style.setProperty("--folder-color", "#f5eb8f");
	document.documentElement.style.setProperty("--memo-background-color", "#FFF");
	document.documentElement.style.setProperty("--boder-color", "#dfdfdf");
	document.documentElement.style.setProperty("--tag-font-color", "#FFF");
	document.documentElement.style.setProperty("--tag-boder-color", "#dfdfdf");
	document.documentElement.style.setProperty(
		"--tag-background-color",
		"#19d3da"
	);
	document.documentElement.style.setProperty("--header-boder-color", "#dfdfdf");
};

export const setDarkTheme = () => {
	document.documentElement.style.setProperty(
		"--header-background-color",
		"#1a1a1a"
	);
	document.documentElement.style.setProperty("--background-color", "#000000");
	document.documentElement.style.setProperty(
		"--box-background-color",
		"#1a1a1a"
	);
	document.documentElement.style.setProperty("--accent-color", "#00ff00");
	document.documentElement.style.setProperty("--base-color", "#00ff00");
	document.documentElement.style.setProperty("--font-color", "#222222");
	document.documentElement.style.setProperty("--sub-button-color", "#00ff00");
	document.documentElement.style.setProperty("--folder-color", "#95ff95");
	document.documentElement.style.setProperty(
		"--memo-background-color",
		"#1a1a1a"
	);
	document.documentElement.style.setProperty("--boder-color", "#00ff00");
	document.documentElement.style.setProperty("--tag-font-color", "#00ff00");
	document.documentElement.style.setProperty("--tag-boder-color", "#00ff00");
	document.documentElement.style.setProperty(
		"--tag-background-color",
		"#1a1a1a"
	);
	document.documentElement.style.setProperty("--header-boder-color", "#141414");
};

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
