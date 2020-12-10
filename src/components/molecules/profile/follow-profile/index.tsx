import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./style.module.css";

import FollowListModal from "@/components/molecules/modal/follow-list-modal";

const useStyles = makeStyles(() =>
	createStyles({
		avatar: {
			"&:hover": {},
		},
		blueButton: {
			borderColor: "var(--accent-color)",
			color: "var(--accent-color)",
			maxWidth: "500px",
			width: "100%",
			marginBottom: "5px",
			textTransform: "none",
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontWeight: 400,
		},
		brownButton: {
			borderColor: "var(--sub-button-color)",
			color: "var(--sub-button-color)",
			maxWidth: "500px",
			width: "100%",
			textTransform: "none",
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontWeight: 400,
		},
	})
);

type Props = {
	userID: string;
};

const FollowProfile: React.FC<Props> = (props: Props) => {
	const { userID } = props;
	const classes = useStyles();

	const [modalOpen, setModalOpen] = React.useState(false);
	const [displayText, setDisplayText] = React.useState("false");

	const handleOpen = (newDisplayText: string) => {
		setDisplayText(newDisplayText);
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<div className={styles.followProfileContainer}>
			<Button
				className={classes.blueButton}
				variant='outlined'
				disableRipple
				onClick={() => {
					handleOpen("Following");
				}}
			>
				15 Following
			</Button>
			<Button
				className={classes.blueButton}
				variant='outlined'
				onClick={() => {
					handleOpen("Followers");
				}}
			>
				0 Followers
			</Button>
			<p className={styles.line} />

			<Button
				className={classes.brownButton}
				variant='outlined'
				onClick={() => {
					handleOpen("Saving");
				}}
			>
				0 Saving
			</Button>
			<FollowListModal
				modalOpen={modalOpen}
				displayText={displayText}
				handleClose={handleClose}
				userID={userID}
			/>
		</div>
	);
};

export default FollowProfile;
