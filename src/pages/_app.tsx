import React from "react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
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
		<SWRConfig
			value={{
				fetcher: (url: string) => axios(url).then((r) => r.data),
			}}
		>
			<Component {...pageProps} />
		</SWRConfig>
	);
};

export default App;
