import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import { ThemeProvider } from "@/provider/ThemeProvider";
import LoadingPage from "@/components/molecules/loading-page";
import NProgress from "nprogress";
import "sanitize.css";
import "@/styles/global.css";
import "@/styles/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
	NProgress.done();
});

Router.events.on("routeChangeError", () => {
	NProgress.done();
});

const App = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setLoading(false);
	});

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);
	return (
		<ThemeProvider>
			{loading ? <LoadingPage /> : <Component {...pageProps} />}
		</ThemeProvider>
	);
};

export default App;
