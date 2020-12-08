import React from "react";
import type { AppProps } from "next/app";
import "sanitize.css";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return <Component {...pageProps} />;
};

export default App;
