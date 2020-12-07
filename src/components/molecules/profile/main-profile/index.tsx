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
	user: responseInterface<User, Error>;
};

const MainProfile: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const { data, error } = user;
	const classes = useStyles();

	if (!data) return <Loading />;

	return (
		<div className={styles.profile}>
			<div className={styles.avatarContainer}>
				<Link href={`/${data.user_id}`}>
					<div className={styles.avatar}>
						<Avatar
							className={classes.avatar}
							alt={data.user_id}
							src={data.icon_link}
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

			<p className={styles.userName}>{data.name}</p>
			<p className={styles.userID}>@{data.user_id}</p>

			<div className={styles.snsLinkWrapper}>
				{data.github_link && (
					<Link href={data.github_link}>
						<FaGithubSquare size={"1.8em"} style={{ color: "#3E2924" }} />
					</Link>
				)}
				{data.twitter_link && (
					<Link href={data.twitter_link}>
						<FaTwitterSquare size={"1.8em"} style={{ color: "#3E2924" }} />
					</Link>
				)}
			</div>

			<p className={styles.userText}>{data.user_text}</p>

			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${data.user_id}${ROUTES.FOLLOW}`}
			>
				{data.follow_count}フォロー
			</Button>
			<Button
				className={classes.blueButton}
				variant='outlined'
				href={`/${data.user_id}${ROUTES.FOLLOWER}`}
			>
				{data.follower_count}フォロワー
			</Button>

			<p className={styles.line} />

			<Button
				className={classes.brownButton}
				variant='outlined'
				href={`/${data.user_id}${ROUTES.FAVORITES}`}
			>
				いいねした備忘録
			</Button>
		</div>
	);
};

export default MainProfile;
