import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { User } from "@/models/user/entity";
import { useRecoilState } from "recoil";
import { followingState } from "@/libs/atom";
import folloedata from "@/fixtures/follow.json";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Follow from "@/components/molecules/follow";
import { GoChevronDown } from "react-icons/go";
import { RiCloseLine } from "react-icons/ri";
import styles from "./style.module.css";

const useStyles = makeStyles(() =>
	createStyles({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
		followModalHeader: {
			display: "flex",
		},
		closeButton: {
			display: "flex",
			paddingRight: "5px",
			paddingTop: "5px",
		},
		paper: {
			backgroundColor: "var(--box-background-color)",
			outline: "none",
			borderRadius: "5px",
			padding: "0 10px 10px 10px",
			maxHeight: "70%",
			width: "450px",
			overflow: "scroll",
		},
		paperHeader: {
			backgroundColor: "var(--box-background-color)",
			borderRadius: "5px",
			padding: "5px 10px 5px 10px",
			width: "450px",
			marginBottom: "-10px",
		},
		"@media (max-width: 470px)": {
			paperHeader: {
				width: "95%",
			},
			paper: { width: "95%", maxHeight: "70%" },
		},
	})
);

type Props = {
	userID: string;
	displayText: string;
	modalOpen: boolean;
	follows: User[];
	loading: boolean;
	error: boolean;
	handleClose: () => void;
};

const FollowListModal: React.FC<Props> = (props: Props) => {
	const { userID, displayText, modalOpen, handleClose, follows } = props;
	const classes = useStyles();
	const [myfollows, setMyFollows] = useRecoilState(followingState);

	if (!follows) return null;

	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={modalOpen}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modalOpen}>
					<>
						<div className={classes.paperHeader}>
							<div className={classes.followModalHeader}>
								<div className={styles.followTextWrapper}>
									<GoChevronDown
										style={{
											fontSize: "28px",
											color: "var(--base-color)",
											marginRight: "5px",
											marginTop: "3px",
										}}
									/>
									<h1 className={styles.followText}>{displayText}</h1>
								</div>
								<div className={classes.closeButton}>
									<RiCloseLine
										style={{
											fontSize: "32px",
											color: "var(--base-color)",
										}}
										onClick={handleClose}
									/>
								</div>
							</div>
						</div>
						<div className={classes.paper}>
							{follows.length ? (
								<>
									{follows.map((follow, index) => (
										<>
											<Follow key={follow.user_id} followData={follow} />
											{follows.length != index + 1 && (
												<p className={styles.line}></p>
											)}
										</>
									))}
								</>
							) : (
								<div className={styles.noneFollowText}>
									{displayText === "Following" ? (
										<p>@{userID}さんは誰もフォローしていません</p>
									) : (
										<p>@{userID}さんにはフォロワーがいません</p>
									)}
								</div>
							)}
						</div>
					</>
				</Fade>
			</Modal>
		</div>
	);
};

export default FollowListModal;
