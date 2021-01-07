import React from "react";
import { themeContext } from "@/context/theme";
import { useTheme } from "@/hooks/use-theme";

export const ThemeProvider: React.FC = (props) => {
	const toggleTheme = useTheme();

	return (
		<themeContext.Provider value={toggleTheme}>
			{props.children}
		</themeContext.Provider>
	);
};
