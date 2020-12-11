import React from "react";
import { CgNotes } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";

import styles from "./style.module.css";

type Props = {};

const MiniProfile: React.FC<Props> = (props: Props) => {
	return (
		<div className={styles.miniProfileContainer}>
			<div className={styles.titleWrapper}>
				<h1 className={styles.title}>History</h1>
			</div>

			<div className={styles.historyWrapper}>
				<div>
					<FaBirthdayCake size={"15"} />
					<span className={styles.birth}>{`2020年9月1日 に登録   `}</span>
				</div>
				<div>
					<CgNotes size={"15"} />
					<span className={styles.postCount}>{`16 件の投稿`}</span>
				</div>
				<div>
					<FaRegCommentDots size={"15"} />
					<span className={styles.commentCount}>{`2件のコメント`}</span>
				</div>
			</div>
		</div>
	);
};

export default MiniProfile;
