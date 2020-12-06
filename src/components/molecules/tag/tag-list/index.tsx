import React from "react";
import TagComponent from "@/components/atoms/tag";
import Loading from "@/components/molecules/loading";
import { Tag } from "@/models/tag/entity";
import styles from "./style.module.css";

type Props = {
	tags: Tag[];
};

const TagList: React.FC<Props> = (props: Props) => {
	const { tags } = props;

	if (!tags) return <Loading />;

	return (
		<>
			{tags.length ? (
				<div className={styles.tagWrapper}>
					{tags.map((tag) => (
						<TagComponent tag={tag} />
					))}
				</div>
			) : (
				<div className={styles.noneTagText}>
					<p>登録されたタグはありません</p>
				</div>
			)}
		</>
	);
};

export default TagList;
