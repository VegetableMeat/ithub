import React from "react";
import Avatar from "react-avatar";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Button from "@material-ui/core/Button";
import Text from "@/components/atoms/text";
import { userData } from "@/models/user/entity";
import styles from "./style.module.css";

type Props = {
	displayText: "フォロー中" | "フォロワー";
	userData: userData;
	followData: userData[];
};

const FollowList: React.FC<Props> = (props: Props) => {
	const { displayText, userData, followData } = props;
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
			{followData.length ? (
				<>
					{followData.map((follow) => (
						<>
							<div className={styles.follow}>
								<Avatar
									className={styles.avatar}
									alt={follow.name}
									src='https://avatars2.githubusercontent.com/u/52918714?v=4'
									round={true}
									size='45px'
								/>

								<Text className={styles.userName}>{follow.name}</Text>
								<Text className={styles.userID}>@{follow.user_id}</Text>
								<Text className={styles.userText}>{follow.user_text}</Text>

								<div className={styles.buttonWrapper}>
									<Button
										style={{
											borderColor: "#3E2924",
											marginBottom: "2px",
										}}
										variant='outlined'
									>
										フォロー
									</Button>
								</div>
							</div>
							<p className={styles.line} />
						</>
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
