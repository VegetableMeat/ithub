import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Layout from "@/components/organisms/layout";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { MemoMarkdown } from "@/models/memo-markdown/entity";
import styles from "@/styles/Articles.module.css";

export interface ServerSideProps {
	initialMemoData: MemoMarkdown;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialMemoData = await fetcher(`${API_URL}/articles/${params.id}`);
	return { props: { initialMemoData } };
};

const Articles = (props: ServerSideProps) => {
	const { initialMemoData } = props;
	return (
		<Layout>
			<div className={styles.rootContainer}>
				<main className={styles.mainContainer}>
					<ReactMarkdown
						plugins={[gfm]}
						className={styles.markdown}
						children={initialMemoData.markdown}
					/>
				</main>
			</div>
		</Layout>
	);
};

export default Articles;
