import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Memo } from "@/libs/local-save";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Alert } from "@material-ui/lab";
import styles from "./style.module.css";

const useStyles = makeStyles(() =>
	createStyles({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		},
		paper: {
			backgroundColor: "var(--box-background-color)",
			outline: "none",
			borderRadius: "5px",
			padding: "20px",
			width: "400px",
			overflow: "scroll",
		},
		"@media (max-width: 470px)": {
			paper: { width: "95%", maxHeight: "70%" },
		},
	})
);

type Props = {
	modalOpen: boolean;
	localSaveMemo: Memo;
	restoreFunc: () => void;
	modalCloseFunc: () => void;
};

const SaveMemoModal: React.FC<Props> = (props: Props) => {
	const { modalOpen, localSaveMemo, restoreFunc, modalCloseFunc } = props;
	const classes = useStyles();
	const title = localSaveMemo ? localSaveMemo.title : "エラー";

	return (
		<div>
			<Modal
				className={classes.modal}
				open={modalOpen}
				BackdropComponent={Backdrop}
			>
				<Fade in={modalOpen}>
					<div className={classes.paper}>
						<Alert style={{ marginBottom: "10px" }} severity='info'>
							保存されたノートがあります
						</Alert>
						<div className={styles.saveMemoWrapper}>
							<p>タイトル : {title === "" ? "設定されていません" : title}</p>
						</div>
						<div className={styles.alertWrapper}>
							<p onClick={() => restoreFunc()}>前回の続きから始める</p>
							<p onClick={() => modalCloseFunc()}>新しいノートを書く</p>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default SaveMemoModal;
