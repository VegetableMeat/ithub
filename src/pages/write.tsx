import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { makeStyles } from "@material-ui/styles";
import Layout from "@/components/organisms/layout";
import WriteHeader from "@/components/organisms/header/write-header";
import WriteSidebar from "@/components/organisms/sidebar/write-sidebar";
import WriteForm from "@/components/organisms/write-form";
import SaveMemoModal from "@/components/molecules/modal/save-memo-modal";
import Preview from "@/components/organisms/preview";
import Snackbar from "@material-ui/core/Snackbar";
import { Memo, getMemo, saveMemo } from "@/libs/local-save";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { Tag } from "@/models/tag/entity";
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialTagData = await fetcher(`${API_URL}/tags`);
	return { props: { initialTagData } };
};

const Write = (props: ServerSideProps) => {
	const initialTagData = props.initialTagData;
	const [inputTitle, setInputTitle] = useState("");
	const [inputTag, setInputTag] = useState<string[]>([]);
	const [inputMarkdown, setInputMarkdown] = useState("");
	const [isPreview, setIsPreview] = useState(true);
	const [open, setOpen] = React.useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const classes = useStyles();
	const tagOption = initialTagData ? initialTagData.map((tag) => tag.name) : [];

	useEffect(() => {
		if (getMemo()) {
			handleModalOpen();
		}
	}, []);

	const restoreMemo = () => {
		const localSaveMemo = getMemo();
		setInputTitle(localSaveMemo.title);
		setInputTag(localSaveMemo.tags);
		setInputMarkdown(localSaveMemo.markdown);
		handleModalClose();
	};

	const [modalOpen, setModalOpen] = React.useState(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleClose = (e?: React.SyntheticEvent, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const handleLocalSave = () => {
		const newMemo: Memo = {
			title: inputTitle,
			tags: inputTag,
			markdown: inputMarkdown,
		};
		saveMemo(newMemo);
		setSnackbarMessage("ローカルに保存しました");
		setOpen(true);
	};

	return (
		<Layout title={""} noneHeader>
			<WriteHeader />
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
					setOpen={setOpen}
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
				open={open}
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
