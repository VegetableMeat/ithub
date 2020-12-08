import React from "react";
import Link from "next/link";
import { responseInterface } from "swr";
import type { User } from "@/models/user/entity";
import { makeStyles } from "@material-ui/styles";
import Avatar from "react-avatar";
import { GrUserSettings } from "react-icons/gr";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Loading from "@/components/molecules/loading";
import * as ROUTES from "@/constants/routes";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		"&:hover": {
			filter: "brightness(98%)",
		},
	},
	blueButton: {
		color: "#64B9DE",
		borderColor: "#64B9DE",
		maxWidth: "500px",
		width: "100%",
		marginBottom: "5px",
		textTransform: "none",
	},
	brownButton: {
		borderColor: "#3E2924",
		maxWidth: "500px",
		width: "100%",
	},
}));

type Props = {
	user: User;
};

const MainProfile: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const classes = useStyles();

	return (
		<div className={styles.profile}>
			<div className={styles.avatarContainer}>
				<Link href={`/${user.user_id}`}>
					<div className={styles.avatar}>
						<Avatar
							className={classes.avatar}
							alt={user.user_id}
							src={user.icon_link}
							round={true}
							size='100px'
						/>
					</div>
				</Link>
				{true && (
					<Link href={"ROUTES.SETTING"}>
						<div className={styles.settingIcon}>
							<GrUserSettings size={"1.5em"} style={{ color: "#3E2924" }} />
						</div>
					</Link>
				)}
			</div>

			<p className={styles.userName}>{user.name}</p>
			<p className={styles.userID}>@{user.user_id}</p>

			<div className={styles.snsLinkWrapper}>
				{user.github_link && (
					<Link href={user.github_link}>
						<FaGithubSquare size={"1.8em"} style={{ color: "#3E2924" }} />
					</Link>
				)}
				{user.twitter_link && (
					<Link href={user.twitter_link}>
						<FaTwitterSquare size={"1.8em"} style={{ color: "#3E2924" }} />
					</Link>
				)}
			</div>

			<p className={styles.userText}>{user.user_text}</p>

			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${user.user_id}${ROUTES.FOLLOW}`}
			>
				{user.follow_count}フォロー
			</Button>
			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${user.user_id}${ROUTES.FOLLOWER}`}
			>
				{user.follower_count}フォロワー
			</Button>

			<p className={styles.line} />

			<Button
				className={classes.brownButton}
				variant='outlined'
				href={`/${user.user_id}${ROUTES.FAVORITES}`}
			>
				いいねした備忘録
			</Button>
		</div>
	);
};

export default MainProfile;
