import React from "react";
import type { User } from "@/models/user/entity";
import moment from "moment";

import { CgNotes } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import styles from "./style.module.css";

type Props = {
	user: User;
};

const MiniProfile: React.FC<Props> = (props: Props) => {
	const { user } = props;

	const formatBirth = (birh: string): string => {
		return moment(birh).format("YYYY年M月D日");
	};

	return (
		<div className={styles.miniProfileContainer}>
			<div className={styles.historyWrapper}>
				<div className={styles.birthBlock}>
					<FaBirthdayCake size={"20"} />
					<p className={styles.birth}>{formatBirth(user.created_at)}に登録</p>
				</div>
				<div className={styles.postCountBlock}>
					<CgNotes size={"20"} />
					<p className={styles.postCount}>{user.post_count} 件の投稿</p>
				</div>
				<div className={styles.commentCountBlock}>
					<FaRegCommentDots size={"20"} />
					<p className={styles.commentCount}>
						{user.comment_count} 件のコメント
					</p>
				</div>
			</div>
		</div>
	);
};

export default MiniProfile;
