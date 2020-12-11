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

Ligt Themex

*/
export const setLightTheme = (): void => {
	setProperty("--header-background-color", "#FFF");
	setProperty("--background-color", "#f1f3f7");
	setProperty("--box-background-color", "#FFF");
	setProperty("--accent-color", "#19d3da");
	setProperty("--base-color", "#373a40");
	setProperty("--font-color", "#181818");
	setProperty("--sub-font-color", "#5e5e5e");
	setProperty("--sub-button-color", "#373a40");
	setProperty("--folder-color", "#f5eb8f");
	setProperty("--memo-background-color", "#FFF");
	setProperty("--border-color", "#FFF");
	setProperty("--tag-font-color", "#FFF");
	setProperty("--tag-boder-color", "#dfdfdf");
	setProperty("--tag-background-color", "#19d3da");
	setProperty("--header-boder-color", "#dfdfdf");
	setProperty("--avatar-background-color", "#ececec");
	setProperty("--box-shadow-color", "5px 5px 10px rgba(202, 202, 202, 0.212)");
};

/*

Dark Theme

*/
export const setDarkTheme = (): void => {
	setProperty("--header-background-color", "#1a1a1a");
	setProperty("--background-color", "#000000");
	setProperty("--box-background-color", "#1a1a1a");
	setProperty("--accent-color", "#00ff00");
	setProperty("--base-color", "#00ff00");
	setProperty("--font-color", "#222222");
	setProperty("--sub-font-color", "#00ff00");
	setProperty("--sub-button-color", "#00ff00");
	setProperty("--folder-color", "#95ff95");
	setProperty("--memo-background-color", "#1a1a1a");
	setProperty("--border-color", "#00ff00");
	setProperty("--tag-font-color", "#00ff00");
	setProperty("--tag-boder-color", "#00ff00");
	setProperty("--tag-background-color", "#1a1a1a");
	setProperty("--header-boder-color", "#141414");
	setProperty("--avatar-background-color", "#FFF");
	setProperty("--box-shadow-color", "0");
};
