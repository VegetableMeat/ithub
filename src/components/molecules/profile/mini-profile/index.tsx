import React from "react";

import { CgNotes } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import styles from "./style.module.css";

type Props = {};

const MiniProfile: React.FC<Props> = (props: Props) => {
	return (
		<div className={styles.miniProfileContainer}>
			<div className={styles.historyWrapper}>
				<div className={styles.birthBlock}>
					<FaBirthdayCake size={"20"} />
					<p className={styles.birth}>2020年9月1日に登録</p>
				</div>
				<div className={styles.postCountBlock}>
					<CgNotes size={"20"} />
					<p className={styles.postCount}>16 件の投稿</p>
				</div>
				<div className={styles.commentCountBlock}>
					<FaRegCommentDots size={"20"} />
					<p className={styles.commentCount}>2件のコメント</p>
				</div>
			</div>
		</div>
	);
};

export default MiniProfile;
