import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import { Memo, getMemo, saveMemo } from "@/libs/local-save";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { Tag } from "@/models/tag/entity";
import { useRecoilState } from "recoil";
import { userState } from "@/libs/atom";
import axios from "axios";

import Layout from "@/components/organisms/layout";
import WriteHeader from "@/components/organisms/header/write-header";
import WriteSidebar from "@/components/organisms/sidebar/write-sidebar";
import WriteForm from "@/components/organisms/write-form";
import SaveMemoModal from "@/components/molecules/modal/save-memo-modal";
import Preview from "@/components/organisms/preview";
import Snackbar from "@material-ui/core/Snackbar";
import styles from "@/styles/Write.module.css";
import "easymde/dist/easymde.min.css";

const useStyles = makeStyles(() => ({
	alert: {
		marginBottom: "10px",
		border: "1px red solid !important",
		"& p": {
			margin: "0px",
		},
	},
	root: { minWidth: "0px" },
}));

export interface ServerSideProps {
	initialTagData: Tag[];
}

export const getServerSideProps: GetServerSideProps = async () => {
	const initialTagData = await fetcher(`${API_URL}/tags`);
	return { props: { initialTagData } };
};

const Write = (props: ServerSideProps) => {
	const initialTagData = props.initialTagData;

	const [inputTitle, setInputTitle] = useState<string>("");
	const [inputTag, setInputTag] = useState<string[]>([]);
	const [inputMarkdown, setInputMarkdown] = useState<string>("");
	const [isPreview, setIsPreview] = useState<boolean>(true);
	const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [snackbarMessage, setSnackbarMessage] = useState<string>("");
	const [user, setUser] = useRecoilState(userState);

	const router = useRouter();
	const classes = useStyles();
	const tagOption = initialTagData ? initialTagData.map((tag) => tag.name) : [];

	const restoreMemo = () => {
		const localSaveMemo = getMemo();
		setInputTitle(localSaveMemo.title);
		setInputTag(localSaveMemo.tags);
		setInputMarkdown(localSaveMemo.markdown);
		handleModalClose();
	};

	useEffect(() => {
		if (getMemo()) {
			handleModalOpen();
		}
	}, []);

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleClose = (e?: React.SyntheticEvent, reason?: string): void => {
		if (reason === "clickaway") {
			return;
		}
		setSnackbarOpen(false);
	};

	const handleLocalSave = () => {
		const newMemo: Memo = {
			title: inputTitle,
			tags: inputTag,
			markdown: inputMarkdown,
		};
		saveMemo(newMemo);
		setSnackbarMessage("ローカルに保存しました");
		setSnackbarOpen(true);
	};

	const handleSubmit = async () => {
		if (!inputTitle || !inputMarkdown) return;

		try {
			const res = await axios.post(
				"http://localhost:8000/v1/notes/",
				{
					memo_title: inputTitle,
					tags: null,
					markdown: inputMarkdown,
				},
				{ withCredentials: true }
			);
			router.push({
				pathname: `/${user.user_id}/articles/${res.data.id}`,
			});
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout title={"write"} noneHeader>
			<WriteHeader handleSubmit={handleSubmit} />
			<main className={styles.content}>
				{isPreview ? (
					<WriteForm
						tagOption={tagOption}
						inputTitle={inputTitle}
						setInputTitle={setInputTitle}
						inputTag={inputTag}
						setInputTag={setInputTag}
						setInputMarkdown={setInputMarkdown}
						inputMarkdown={inputMarkdown}
					/>
				) : (
					<Preview markdown={inputMarkdown} />
				)}
				<WriteSidebar
					inputMarkdown={inputMarkdown}
					setInputMarkdown={setInputMarkdown}
					isPreview={isPreview}
					setIsPreview={setIsPreview}
					setSnackbarMessage={setSnackbarMessage}
					setOpen={setSnackbarOpen}
					handleLocalSave={handleLocalSave}
				/>
			</main>
			<Snackbar
				ContentProps={{
					classes: {
						root: classes.root,
					},
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				open={snackbarOpen}
				onClose={handleClose}
				autoHideDuration={3000}
				message={snackbarMessage}
			/>
			<SaveMemoModal
				modalOpen={modalOpen}
				localSaveMemo={getMemo()}
				restoreFunc={restoreMemo}
				modalCloseFunc={handleModalClose}
			/>
		</Layout>
	);
};

export default Write;
