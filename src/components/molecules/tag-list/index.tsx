import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
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
				<AiOutlinePaperClip
					size={"25"}
					style={{ color: "var(--base-color)" }}
				/>
				<span className={styles.tagText}>フォロータグ</span>
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
