import React from "react";
import Follow from "@/components/molecules/follow";
import Loading from "@/components/molecules/loading";
import { User } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	displayText: "フォロー中" | "フォロワー";
	follows: User[];
	userID: string;
};

const FollowList: React.FC<Props> = (props: Props) => {
	const { follows, displayText, userID } = props;

	if (!follows) return <Loading />;

	return (
		<>
			{follows.length ? (
				<>
					{follows.map((follow, index) => (
						<>
							<Follow followData={follow} />
							{follows.length != index + 1 && <p className={styles.line}></p>}
						</>
					))}
				</>
			) : (
				<div className={styles.noneFollowText}>
					{displayText === "フォロー中" ? (
						<p>@{userID}さんは誰もフォローしていません</p>
					) : (
						<p>@{userID}さんにはフォロワーがいません</p>
					)}
				</div>
			)}
		</>
	);
};

export default FollowList;
