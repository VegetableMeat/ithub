import React from "react";
import gfm from "remark-gfm";

import ReactMarkdown from "react-markdown";
import Highlighter from "@/components/molecules/highlighter";
import styles from "./style.module.css";

type Props = {
	markdown?: string;
};

const Preview: React.FC<Props> = (props) => {
	const { markdown } = props;

	return (
		<div className={styles.PreviewWrapper}>
			<ReactMarkdown
				plugins={[gfm]}
				renderers={{ code: Highlighter }}
				className={"markdown"}
				children={markdown === "" ? "**No content**" : markdown}
			/>
		</div>
	);
};

export default Preview;
