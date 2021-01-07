import React from "react";

import Follow from "@/components/molecules/follow";
import { User } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	follows: User[];
	displayText: "Following" | "Follower";
	userID: string;
};

const FollowList: React.FC<Props> = (props: Props) => {
	const { follows, displayText, userID } = props;

	return (
		<div className={styles.followListContainer}>
			{follows.length ? (
				<>
					{follows.map((follow, index) => (
						<>
							<Follow key={follow.user_id} followData={follow} />
							{follows.length != index + 1 && <p className={styles.line}></p>}
						</>
					))}
				</>
			) : (
				<div className={styles.noneFollowText}>
					{displayText === "Following" ? (
						<p>@{userID}さんは誰もフォローしていません</p>
					) : (
						<p>@{userID}さんにはフォロワーがいません</p>
					)}
				</div>
			)}
		</div>
	);
};

export default FollowList;
