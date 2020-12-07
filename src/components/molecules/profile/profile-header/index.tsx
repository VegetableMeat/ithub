import React from "react";
import Link from "next/link";
import { responseInterface } from "swr";
import MediaQuery from "react-responsive";
import { makeStyles } from "@material-ui/styles";
import Avatar from "react-avatar";
import { GrUserSettings } from "react-icons/gr";
import Button from "@material-ui/core/Button";
import Loading from "@/components/molecules/loading";
import type { User } from "@/models/user/entity";
import * as ROUTES from "@/constants/routes";
import { API_ERROR_MESSAGE } from "@/constants/messages";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		position: "relative",
		top: "-42px",
		["@media (max-width: 770px)"]: {
			top: "-18px",
		},
		"&:hover": {},
	},
	brownButton: {
		color: "#533a33",
		borderColor: "#533a33",
		textTransform: "none",
		justifyContent: "center",
	},
}));

type Props = {
	user: responseInterface<User, Error>;
};

const ProfileHeader: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const { data, error } = user;
	const classes = useStyles();

	if (!data) return <Loading />;

	return (
		<header className={styles.profileHeaderContainer}>
			{!error ? (
				<>
					<Link href={`/${data.user_id}`}>
						<div className={styles.avatar}>
							<Avatar
								className={classes.avatar}
								alt={data.name}
								src={data.icon_link}
								round={true}
							/>
						</div>
					</Link>
					{data.is_you ? (
						<>
							<MediaQuery query='(min-width: 481px)'>
								<div className={styles.followButton}>
									<Button
										className={classes.brownButton}
										variant='outlined'
										href={`${ROUTES.SETTING}`}
									>
										プロフィール設定
									</Button>
								</div>
							</MediaQuery>
							<MediaQuery query='(max-width: 480px)'>
								<Link href={ROUTES.SETTING}>
									<div className={styles.settingIcon}>
										<GrUserSettings
											size={"1.5em"}
											style={{ color: "#3E2924" }}
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

					<h1 className={styles.userName}>{data.name}</h1>
					<p className={styles.userID}>@{data.user_id}</p>
					<p className={styles.userText}>{data.user_text}</p>
				</>
			) : (
				<div className={styles.tagErrorMessage}>
					<p>{API_ERROR_MESSAGE}</p>
				</div>
			)}
		</header>
	);
};

export default ProfileHeader;
