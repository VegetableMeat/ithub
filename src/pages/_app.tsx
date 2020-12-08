import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/organisms/theme";
import "sanitize.css";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
