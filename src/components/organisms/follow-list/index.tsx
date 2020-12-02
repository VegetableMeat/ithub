import React from "react";
import Avatar from "react-avatar";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Follow from "@/components/molecules/follow";
import { userData } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	displayText: "フォロー中" | "フォロワー";
	userData: userData;
	followDatas: userData[];
};

const FollowList: React.FC<Props> = (props: Props) => {
	const { displayText, userData, followDatas } = props;
	return (
		<>
			<div className={styles.followTextWrapper}>
				<PermIdentityIcon
					style={{
						fontSize: "30px",
						color: "#3E2924",
						marginRight: "5px",
					}}
				/>
				<h1 className={styles.followText}>{displayText}</h1>
			</div>
			{followDatas.length ? (
				<>
					{followDatas.map((followData) => (
						<Follow followData={followData} />
					))}
				</>
			) : (
				<div className={styles.noneFollowText}>
					{displayText === "フォロー中" ? (
						<p>@{userData.user_id}さんは誰もフォローしていません</p>
					) : (
						<p>@{userData.user_id}さんにはフォロワーがいません</p>
					)}
				</div>
			)}
		</>
	);
};

export default FollowList;
