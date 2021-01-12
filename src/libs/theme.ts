const THEME_STORAGE_KEY = "__initial_theme_state";

export type Theme = "light" | "dark";

export const getTheme = (): Theme =>
	(localStorage.getItem(THEME_STORAGE_KEY) ?? "light") as Theme;

export const saveTheme = (theme: Theme): void =>
	localStorage.setItem(THEME_STORAGE_KEY, theme);

const setProperty = (key: string, value: string): void => {
	document.documentElement.style.setProperty(key, value);
};

/*

Ligt Theme

*/
export const setLightTheme = (): void => {
	setProperty("--header-background-color", "#fff");
	setProperty("--background-color", "#f1f3f7");
	setProperty("--box-background-color", "#fff");
	setProperty("--accent-color", "#19d3da");
	setProperty("--base-color", "#373a40");
	setProperty("--font-color", "#181818");
	setProperty("--sub-font-color", "#5e5e5e");
	setProperty("--sub-button-color", "#373a40");
	setProperty("--folder-color", "#f5eb8f");
	setProperty("--memo-background-color", "#fff");
	setProperty("--border-color", "#fff");
	setProperty("--tag-font-color", "#fff");
	setProperty("--tag-boder-color", "#dfdfdf");
	setProperty("--tag-background-color", "#19d3da");
	setProperty("--header-boder-color", "#dfdfdf");
	setProperty("--avatar-background-color", "#ececec");
	setProperty("--box-shadow-color", "5px 5px 10px rgba(202, 202, 202, 0.212)");
	setProperty("--button-hover-color", "#19d3dac0");
	setProperty("--navigation-focus", "#19d3da");
	setProperty("--navigation-unfocus", "#808080");
	setProperty("--textfield-border-color", "rgb(25, 211, 218, 0.5)");
	setProperty("--textfield-border-hover-color", "#19d3da");
	setProperty("--textfield-border-focus-color", "#19d3da");
	setProperty("--header-paper-border-color", "#dfdfdf");
	setProperty("--header-paper-background-color", "#fff");
	setProperty("--placeholder-color", "#000");
	setProperty("--header-button-text-color", "#fff");
	setProperty("--header-menu-text-color", "#808080");
	setProperty("--header-menu-hover-background-color", "#19d3dac0");
	setProperty("--title-hover-color", "#373a40a0");
};

/*

Dark Theme

*/
export const setDarkTheme = (): void => {
	setProperty("--header-background-color", "#1a1a1a");
	setProperty("--background-color", "#000");
	setProperty("--box-background-color", "#1a1a1a");
	setProperty("--accent-color", "#0f0");
	setProperty("--base-color", "#0f0");
	setProperty("--font-color", "#222");
	setProperty("--sub-font-color", "#0f0");
	setProperty("--sub-button-color", "#0f0");
	setProperty("--folder-color", "#95ff95");
	setProperty("--memo-background-color", "#1a1a1a");
	setProperty("--border-color", "#0f0");
	setProperty("--tag-font-color", "#0f0");
	setProperty("--tag-boder-color", "#0f0");
	setProperty("--tag-background-color", "#1a1a1a");
	setProperty("--header-boder-color", "#141414");
	setProperty("--avatar-background-color", "#fff");
	setProperty("--box-shadow-color", "0");
	setProperty("--button-hover-color", "#00ff00c0");
	setProperty("--navigation-focus", "#0f0");
	setProperty("--navigation-unfocus", "#f7f7f7");
	setProperty("--textfield-border-color", "rgb(0, 255, 0, 0.5)");
	setProperty("--textfield-border-hover-color", "#0f0");
	setProperty("--textfield-border-focus-color", "#0f0");
	setProperty("--header-paper-border-color", "#0f0");
	setProperty("--header-paper-background-color", "#1a1a1a");
	setProperty("--placeholder-color", "#fff");
	setProperty("--header-button-text-color", "#000");
	setProperty("--header-menu-text-color", "#c7c7c7");
	setProperty("--header-menu-hover-background-color", "#00ff00c0");
	setProperty("--title-hover-color", "#00ff00a0");
};
