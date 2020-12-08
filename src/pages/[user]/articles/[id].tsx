import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Layout from "@/components/organisms/layout";
import styles from "./style.module.css";

import markdown from "@/fixtures/memo-md2.json";

const Articles = () => {
	return (
		<Layout>
			<main className={styles.mainWrapper}>
				<div className={styles.content}>
					<ReactMarkdown
						plugins={[gfm]}
						className={styles.markdown}
						children={markdown.markdown}
					/>
				</div>
			</main>
		</Layout>
	);
};

export default Articles;
