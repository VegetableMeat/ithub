import React from "react";
import useSWR from "swr";
import { FaTags } from "react-icons/fa";
import TagList from "@/components/molecules/tag/tag-list";
import { Tag } from "@/models/tag/entity";
import { API_URL } from "@/libs/api";
import { API_ERROR_MESSAGE } from "@/constants/messages";
import styles from "./style.module.css";

type Props = {
	userID: string;
};

const TagContainer: React.FC<Props> = (props: Props) => {
	const { userID } = props;
	const { data, error } = useSWR<Tag[], Error>(
		`${API_URL}/users/${userID}/tags`
	);
	return (
		<div className={styles.tagContainer}>
			<div className={styles.titleWrapper}>
				<FaTags size={"25"} style={{ color: "#3E2924", marginRight: "5px" }} />
				<span className={styles.tagText}>フォロータグ</span>
			</div>
			{!error ? (
				<TagList tags={data} />
			) : (
				<div className={styles.tagErrorMessage}>
					<p>{API_ERROR_MESSAGE}</p>
				</div>
			)}
		</div>
	);
};

export default TagContainer;
