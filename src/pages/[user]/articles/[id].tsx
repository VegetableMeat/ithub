import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { MemoMarkdown } from "@/models/memo-markdown/entity";

import Layout from "@/components/organisms/layout";
import styles from "@/styles/Articles.module.css";

export interface ServerSideProps {
	initialMemoData: MemoMarkdown;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialMemoData = await fetcher(
		`http://localhost:8000/v1/notes/${params.id}`
	);
	return { props: { initialMemoData } };
};

const Articles = (props: ServerSideProps) => {
	const { initialMemoData } = props;
	return (
		<Layout>
			<div className={styles.content}>
				<main className={styles.mainContainer}>
					<ReactMarkdown
						plugins={[gfm]}
						className={"markdown"}
						children={initialMemoData.markdown}
					/>
				</main>
			</div>
		</Layout>
	);
};

export default Articles;
