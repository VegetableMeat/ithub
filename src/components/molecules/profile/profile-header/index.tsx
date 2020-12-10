import React from "react";
import Link from "next/link";
import MediaQuery from "react-responsive";
import { makeStyles } from "@material-ui/styles";
import Avatar from "react-avatar";
import { GrUserSettings } from "react-icons/gr";
import Button from "@material-ui/core/Button";
import type { User } from "@/models/user/entity";
import * as ROUTES from "@/constants/routes";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		position: "relative",
		top: "-42px",
		["@media (max-width: 770px)"]: {
			top: "-18px",
		},
		"&:hover": {
			filter: "brightness(94%)",
		},
	},
	brownButton: {
		color: "var(--base-color)",
		borderColor: "var(--base-color)",
		textTransform: "none",
		justifyContent: "center",
	},
}));

type Props = {
	user: User;
};

const ProfileHeader: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const classes = useStyles();

	return (
		<header className={styles.profileHeaderContainer}>
			<Link href={`/${user.user_id}`}>
				<div className={styles.avatar}>
					<Avatar
						className={classes.avatar}
						alt={user.name}
						src={user.icon_link}
						round={true}
					/>
				</div>
			</Link>
			{user.is_you ? (
				<>
					<MediaQuery query='(min-width: 481px)'>
						<Link
							href={{
								pathname: `/${ROUTES.SETTING}`,
							}}
						>
							<div className={styles.followButton}>
								<Button className={classes.brownButton} variant='outlined'>
									Settings
								</Button>
							</div>
						</Link>
					</MediaQuery>
					<MediaQuery query='(max-width: 480px)'>
						<Link href={ROUTES.SETTING}>
							<div className={styles.settingIcon}>
								<GrUserSettings
									size={"1.5em"}
									style={{ color: "var(--base-color)" }}
								/>
							</div>
						</Link>
					</MediaQuery>
				</>
			) : (
				<div className={styles.followButton}>
					<Button className={classes.brownButton} variant='outlined'>
						フォロー
					</Button>
				</div>
			)}
			<h1 className={styles.userName}>{user.name}</h1>
			<p className={styles.userID}>@{user.user_id}</p>
			<p className={styles.userText}>{user.user_text}</p>
		</header>
	);
};

export default ProfileHeader;
