import React from "react";
import Head from "next/head";

import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import { useToggleTheme } from "@/context/theme";

type Props = {
	title?: string | string[];
	children: React.ReactNode;
	noHeaderContents?: boolean;
	noneHeader?: boolean;
};

const Layout: React.FC<Props> = (props) => {
	const { children, title, noHeaderContents, noneHeader } = props;

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
				/>
			</Head>
			{!noneHeader && <Header noHeaderContents={noHeaderContents} />}
			{children}
			{!noneHeader && <Footer />}
		</>
	);
};

export default Layout;
