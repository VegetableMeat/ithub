import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import Provider from "@/provider";
import NProgress from "nprogress";

import LoadingPage from "@/components/molecules/loading-page";
import "sanitize.css";
import "@/styles/global.css";
import "@/styles/nprogress.css";
import "@/styles/easymde.css";
import "@/styles/markdown.scss";

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
		<Provider>
			{loading ? <LoadingPage /> : <Component {...pageProps} />}
		</Provider>
	);
};

export default App;
