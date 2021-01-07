import React from "react";
import { Tag as TagEntity } from "@/models/tag/entity";

import Tag from "@/components/atoms/tag";
import styles from "./style.module.css";

type Props = {
	tags: TagEntity[];
};

const TagList: React.FC<Props> = (props: Props) => {
	const { tags } = props;

	return (
		<div className={styles.tagContainer}>
			<div className={styles.titleWrapper}>
				<span className={styles.tagText}>Following Tags</span>
			</div>
			{tags.length ? (
				<div className={styles.tagWrapper}>
					{tags.map((tag) => (
						<Tag key={tag.id} tag={tag} />
					))}
				</div>
			) : (
				<div className={styles.noneTagText}>
					<p>フォローしているタグはありません</p>
				</div>
			)}
		</div>
	);
};

export default TagList;
