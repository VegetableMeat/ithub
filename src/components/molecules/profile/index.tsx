import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import Avatar from "react-avatar";
import { GrUserSettings } from "react-icons/gr";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import Loading from "@/components/molecules/loading";
import Text from "@/components/atoms/text";
import type { User } from "@/models/user/entity";
import * as ROUTES from "@/constants/routes";
import styles from "./style.module.css";

type Props = {
	user: User;
};

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

const SelfProfile: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const classes = useStyles();

	if (!user) return <Loading />;

	return (
		<>
			<div className={styles.avatarContainer}>
				<Link href={`/${user.user_id}`}>
					<div className={styles.avatar}>
						<Avatar
							className={classes.avatar}
							alt={user.name}
							src={user.icon_link}
							round={true}
							size='100px'
						/>
					</div>
				</Link>
				{user.is_you && (
					<Link href={ROUTES.SETTING}>
						<div className={styles.settingIcon}>
							<GrUserSettings size={"1.5em"} style={{ color: "#3E2924" }} />
						</div>
					</Link>
				)}
			</div>

			<Text className={styles.userName}>{user.name}</Text>
			<Text className={styles.userID}>@{user.user_id}</Text>

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

			<Text className={styles.userText}>{user.user_text}</Text>

			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${user.user_id}${ROUTES.FOLLOW}`}
			>
				{user.follow_count} follow
			</Button>
			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${user.user_id}${ROUTES.FOLLOWER}`}
			>
				{user.follower_count} follower
			</Button>

			<p className={styles.line} />

			<Button
				className={classes.brownButton}
				variant='outlined'
				href={`/${user.user_id}${ROUTES.FAVORITES}`}
			>
				いいねした備忘録
			</Button>
		</>
	);
};

export default SelfProfile;
