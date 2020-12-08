import React from "react";
import { FaTags } from "react-icons/fa";
import Tag from "@/components/atoms/tag";
import { Tag as TagEntity } from "@/models/tag/entity";
import styles from "./style.module.css";

type Props = {
	tags: TagEntity[];
};

const TagList: React.FC<Props> = (props: Props) => {
	const { tags } = props;

	return (
		<div className={styles.tagContainer}>
			<div className={styles.titleWrapper}>
				<FaTags size={"25"} style={{ color: "#3E2924", marginRight: "5px" }} />
				<span className={styles.tagText}>フォロータグ</span>
			</div>
			{tags.length ? (
				<div className={styles.tagWrapper}>
					{tags.map((tag) => (
						<Tag tag={tag} />
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
