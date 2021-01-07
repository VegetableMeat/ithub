import React from "react";
import { NextPage, NextPageContext } from "next";

import Layout from "@/components/organisms/layout";
import styles from "../styles/_error.module.css";

interface Props {
	statusCode: number;
}
const Error: NextPage<Props> = ({ statusCode }) => {
	if (statusCode === 500) {
		return <div className={styles.errorContainer}>Internal Server Error</div>;
	}
	return (
		<Layout title='top'>
			<div className={styles.errorContainer}>
				{statusCode}エラーが発生しました
			</div>
		</Layout>
	);
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;

	return { statusCode };
};

export default Error;
