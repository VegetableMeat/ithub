import React from "react";
import Head from "next/head";
import Header from "@/components/organisms/header";

type Props = {
	title?: string | string[];
	children: React.ReactNode;
	noneHeader?: boolean;
};

const Layout: React.FC<Props> = (props) => {
	const { children, title, noneHeader } = props;

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
			{!noneHeader && <Header />}
			{children}
		</>
	);
};

export default Layout;
