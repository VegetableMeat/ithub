import React from "react";

export const useTheme = () => {
	const [theme, setTheme] = React.useState<"light" | "dark">("light");

	React.useEffect(() => {
		switch (theme) {
			case "light": {
				document.documentElement.style.setProperty(
					"--header-background-color",
					"#FFF"
				);
				document.documentElement.style.setProperty(
					"--background-color",
					"#eeeeee"
				);
				document.documentElement.style.setProperty(
					"--box-background-color",
					"#FFF"
				);
				document.documentElement.style.setProperty("--accent-color", "#19d3da");
				document.documentElement.style.setProperty("--base-color", "#373a40");
				document.documentElement.style.setProperty("--font-color", "#222222");
				document.documentElement.style.setProperty(
					"--sub-button-color",
					"#373a40"
				);
				document.documentElement.style.setProperty("--folder-color", "#f5eb8f");
				break;
			}
			case "dark": {
				document.documentElement.style.setProperty(
					"--header-background-color",
					"#1a1a1a"
				);
				document.documentElement.style.setProperty(
					"--background-color",
					"#000000"
				);
				document.documentElement.style.setProperty(
					"--box-background-color",
					"#1a1a1a"
				);
				document.documentElement.style.setProperty("--accent-color", "#13e400");
				document.documentElement.style.setProperty("--base-color", "#13e400");
				document.documentElement.style.setProperty("--font-color", "#222222");
				document.documentElement.style.setProperty(
					"--sub-button-color",
					"#13e400"
				);
				document.documentElement.style.setProperty("--folder-color", "#95ff95");
				break;
			}
		}
	}, [theme]);

	const toggleTheme = () =>
		setTheme((prev) => (prev === "light" ? "dark" : "light"));

	return toggleTheme;
};
