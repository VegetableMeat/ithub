import React from "react";
import { useRouter } from "next/router";
import Avatar from "react-avatar";
import SettingsIcon from "@material-ui/icons/Settings";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import Link from "@/components/atoms/link";
import Text from "@/components/atoms/text";
import { userData } from "@/models/user/entity";
import * as ROUTES from "@/constants/routes";

import styles from "./style.module.css";

type Props = {
	userData: userData;
};

const SelfProfile: React.FC<Props> = (props: Props) => {
	const router = useRouter();
	const { user } = router.query;
	const { userData } = props;
	return (
		<div className={styles.profile}>
			<div className={styles.avatarContainer}>
				<Link className={styles.avatar} href={`/${user}`}>
					<Avatar
						alt={userData.name}
						src='https://avatars2.githubusercontent.com/u/52918714?v=4'
						round={true}
						size='100px'
					/>
				</Link>
				<Link className={styles.settingIcon} href={ROUTES.SETTING}>
					<SettingsIcon style={{ color: "#3E2924" }} />
				</Link>
			</div>

			<Text className={styles.userName}>{userData.name}</Text>
			<Text className={styles.userID}>@{userData.user_id}</Text>

			<Link className={styles.githubIcon} href={userData.github_link}>
				<GitHubIcon style={{ color: "#3E2924" }} />
			</Link>

			<Link className={styles.twitterIcon} href={userData.twitter_link}>
				<TwitterIcon style={{ color: "#3E2924" }} />
			</Link>

			<Text className={styles.userText}>{userData.user_text}</Text>

			<Button
				style={{
					color: "#64B9DE",
					borderColor: "#64B9DE",
					maxWidth: "500px",
					width: "100%",
					marginBottom: "3px",
					textTransform: "none",
				}}
				variant='outlined'
				href={`/${user}${ROUTES.FOLLOW}`}
			>
				{userData.follow_count} follow
			</Button>
			<Button
				style={{
					color: "#64B9DE",
					borderColor: "#64B9DE",
					maxWidth: "500px",
					width: "100%",
					marginBottom: "10px",
					textTransform: "none",
				}}
				variant='outlined'
				href={`/${user}${ROUTES.FOLLOWER}`}
			>
				{userData.follower_count} follower
			</Button>

			<p className={styles.line} />

			<Button
				style={{
					borderColor: "#3E2924",
					maxWidth: "500px",
					width: "100%",
					marginTop: "10px",
				}}
				variant='outlined'
				href={`/${user}${ROUTES.FAVORITES}`}
			>
				いいねした備忘録
			</Button>
		</div>
	);
};

export default SelfProfile;
