import React from "react";
import { useTheme } from "@/hooks/theme";

const themeContext = React.createContext<ReturnType<typeof useTheme>>(() => {});

export const ThemeProvider: React.FC = (props) => {
	const toggleTheme = useTheme();

	return (
		<themeContext.Provider value={toggleTheme}>
			{props.children}
		</themeContext.Provider>
	);
};

export const useToggleTheme = () => React.useContext(themeContext);
