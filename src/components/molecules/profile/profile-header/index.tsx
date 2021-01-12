import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MediaQuery from "react-responsive";
import { useRecoilState } from "recoil";
import { userState, followingState } from "@/libs/atom";
import { makeStyles } from "@material-ui/styles";
import type { User } from "@/models/user/entity";
import type { Follows } from "@/models/follows/entity";
import * as ROUTES from "@/constants/routes";
import axios from "axios";

import Avatar from "react-avatar";
import { GrTwitter, GrGithub } from "react-icons/gr";
import { GrUserSettings } from "react-icons/gr";
import Button from "@material-ui/core/Button";
import FollowListModal from "@/components/molecules/modal/follow-list-modal";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		position: "relative",
		top: "-85px",
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
		fontWeight: 400,
		fontFamily: ["Inter", "sans-serif"].join(","),
	},
}));

type Props = {
	user: User;
};

const ProfileHeader: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const router = useRouter();
	const userQuery = router.query.user;
	const [userdata, setUser] = useRecoilState(userState);
	const [follows, setFollows] = useRecoilState(followingState);
	const classes = useStyles();

	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [displayText, setDisplayText] = React.useState<string>("");
	const [followList, setFollowList] = React.useState<User[]>(null);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<boolean>(false);
	const [isFollow, setIsFollow] = React.useState<boolean>(false);

	useEffect(() => {
		setIsFollow(checkFollow());
	});

	useEffect(() => {
		router.events.on("routeChangeStart", () => setModalOpen(false));
	});

	const checkFollow = (): boolean => {
		for (var i in follows) {
			if (follows[i].user_id === user.user_id) {
				return true;
			}
		}
		return false;
	};

	const handleOpen = (newDisplayText: string): void => {
		setDisplayText(newDisplayText);
		setModalOpen(true);
	};

	const handleClose = (): void => {
		setModalOpen(false);
	};

	const handleGetFollow = async (isFollower: boolean) => {
		if (!isFollower) {
			try {
				setError(false);
				setLoading(true);
				const res = await axios.get(
					`http://localhost:8000/v1/users/${user.user_id}/followers`,
					{ withCredentials: true }
				);
				setFollowList(res.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		} else {
			try {
				setError(false);
				setLoading(true);
				const res = await axios.get(
					`http://localhost:8000/v1/users/${user.user_id}/follows`,
					{ withCredentials: true }
				);
				setFollowList(res.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		}
	};

	const handleFollow = async () => {
		try {
			const res = await axios.get(`http://localhost:8000/v1/follows/`, {
				params: {
					target: user.user_id,
				},
				withCredentials: true,
			});
			let newFollows: Follows = {
				id: user.id,
				name: user.name,
				user_id: user.user_id,
			};
			setFollows((prevValue) => {
				const newFollows2 = prevValue.filter((n) => n.user_id !== user.user_id);
				return [...prevValue, newFollows];
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleFollowOut = async () => {
		try {
			const res = await axios.get(`http://localhost:8000/v1/follows/delete`, {
				params: {
					target: user.user_id,
				},
				withCredentials: true,
			});
			const newFollows = follows.filter((n) => n.user_id !== user.user_id);
			setFollows(newFollows);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<header className={styles.profileHeaderContainer}>
			<Link href={`/users/${user.user_id}`}>
				<div className={styles.avatar}>
					<img
						className={classes.avatar}
						alt={user.name}
						src={user.icon_link}
					/>
				</div>
			</Link>
			{userdata && userdata.user_id === user.user_id ? (
				<>
					<MediaQuery query='(min-width: 481px)'>
						<div className={styles.followButtonWrap}>
							<div
								className={styles.followButton}
								onClick={() => router.push({ pathname: `/` })}
							>
								Settings
							</div>
						</div>
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
				<>
					{!isFollow ? (
						<div className={styles.followButtonWrap}>
							<div
								className={styles.followButton}
								onClick={() => handleFollow()}
							>
								Follow
							</div>
						</div>
					) : (
						<div className={styles.followButtonWrap}>
							<div
								className={styles.followingButton}
								onClick={() => handleFollowOut()}
							>
								Following
							</div>
						</div>
					)}
				</>
			)}
			<h1 className={styles.userName}>{user.name}</h1>
			<p className={styles.userID}>@{user.user_id}</p>
			<p className={styles.userText}>{user.user_text}</p>
			<div className={styles.other}>
				<div className={styles.FollowInfoBlock}>
					<div
						className={styles.followCountWrapper}
						onClick={() => {
							handleOpen("Following");
							handleGetFollow(true);
						}}
					>
						<span className={styles.followCount}>{user.follow_count}</span>
						<span className={styles.followCountText}>Following</span>
					</div>
					<div
						className={styles.followerCountWrapper}
						onClick={() => {
							handleOpen("Followers");
							handleGetFollow(false);
						}}
					>
						<span className={styles.followerCount}>{user.follower_count}</span>
						<span className={styles.followerCountText}>Followers</span>
					</div>
				</div>

				<div className={styles.snsLinkWrapper}>
					{user.github_link && (
						<Link href={user.github_link}>
							<div className={styles.snsIcon}>
								<GrGithub size={"1.5em"} />
							</div>
						</Link>
					)}
					{user.twitter_link && (
						<Link href={user.twitter_link}>
							<div className={styles.snsIcon}>
								<GrTwitter size={"1.5em"} />
							</div>
						</Link>
					)}
				</div>
			</div>
			<FollowListModal
				modalOpen={modalOpen}
				displayText={displayText}
				handleClose={handleClose}
				userID={user.user_id}
				follows={followList}
				loading={true}
				error={false}
			/>
		</header>
	);
};

export default ProfileHeader;
