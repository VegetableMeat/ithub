import React from "react";
import Head from "next/head";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

type Props = {
	title?: string;
	children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
	const { children, title } = props;
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
				></meta>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
