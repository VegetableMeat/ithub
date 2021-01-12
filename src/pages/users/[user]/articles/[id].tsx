import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { fetcher } from "@/libs/fetcher";
import { makeStyles } from "@material-ui/styles";
import type { MemoMarkdown } from "@/models/memo-markdown/entity";
import type { Comment } from "@/models/comment/entity";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import moment from "moment";
import "moment/locale/ja";

import Tag from "@/components/atoms/tag";
import {
	BsBookmark,
	BsBookmarkFill,
	BsHeart,
	BsHeartFill,
	BsList,
} from "react-icons/bs";
import Layout from "@/components/organisms/layout";
import styles from "@/styles/Articles.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		height: "100%",
		["@media (max-width: 770px)"]: {},
		"&:hover": {
			filter: "brightness(94%)",
		},
	},
}));

export interface ServerSideProps {
	initialMemoData: MemoMarkdown;
	initialCommentData: Comment[];
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialMemoData = await fetcher(
		`http://localhost:8000/v1/notes/${params.id}`
	);

	const initialCommentData = await fetcher(
		`http://localhost:8000/v1/notes/${params.id}/comments`
	);

	return { props: { initialMemoData, initialCommentData } };
};

const Articles = (props: ServerSideProps) => {
	const classes = useStyles();
	const router = useRouter();
	const { id } = router.query;
	const { initialMemoData } = props;
	let { initialCommentData } = props;

	const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
	const [isSave, setIsSave] = React.useState<boolean>(false);
	const [inputComment, setInputComment] = React.useState<string>(null);

	const convertDate = (datestr: string): string => {
		const date = moment(datestr);
		return date.format("M月D日");
	};

	const handleCommentSend = async () => {
		try {
			const res = await axios.post(
				`http://localhost:8000/v1/notes/${id}/comments`,
				{
					comment: inputComment,
				},
				{ withCredentials: true }
			);

			const commentData = await fetcher(
				`http://localhost:8000/v1/notes/${id}/comments`
			);

			initialCommentData = commentData;

			console.log(initialCommentData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout>
			<div className={styles.content}>
				<aside className={styles.articleSidebar}>
					<div className={styles.sidebarSticky}>
						<div className={styles.sidebarItemWrapper}>
							{!isFavorite ? (
								<div
									className={styles.buttonWrap}
									onClick={() => setIsFavorite(!isFavorite)}
								>
									<BsHeart
										style={{
											position: "relative",
											top: "2px",
											fontSize: "25px",
											color: "var(--base-color)",
										}}
									/>
								</div>
							) : (
								<div
									className={styles.heartButtonWrap}
									onClick={() => setIsFavorite(!isFavorite)}
								>
									<BsHeartFill
										style={{
											position: "relative",
											top: "2px",
											fontSize: "25px",
											color: "#FF5192",
										}}
									/>
								</div>
							)}

							{!isSave ? (
								<div
									className={styles.buttonWrap}
									onClick={() => setIsSave(!isSave)}
								>
									<BsBookmark
										style={{
											fontSize: "25px",
											color: "var(--base-color)",
										}}
									/>
								</div>
							) : (
								<div
									className={styles.saveButtonWrap}
									onClick={() => setIsSave(!isSave)}
								>
									<BsBookmarkFill
										style={{
											fontSize: "25px",
											color: "#6495ED",
										}}
									/>
								</div>
							)}

							<div className={styles.buttonWrap}>
								<BsList
									style={{
										fontSize: "25px",
										color: "var(--base-color)",
									}}
								/>
							</div>
						</div>
					</div>
				</aside>
				<main className={styles.mainLayout}>
					<div className={styles.mainContainer}>
						<h1>{initialMemoData.memo_title}</h1>
						<div className={styles.tagWrapper}>
							{initialMemoData.tags.map((tag) => (
								<Tag key={tag.id} tag={tag} />
							))}
						</div>

						<div className={styles.noteUser}>
							<div className={styles.avatar}>
								<img src={initialMemoData.user.icon_link} />
							</div>
							<p className={styles.name}>{initialMemoData.user.name}</p>
							<p className={styles.created}>
								{convertDate(initialMemoData.created_at)}
							</p>
						</div>

						<ReactMarkdown
							plugins={[gfm]}
							className={"markdown"}
							children={initialMemoData.markdown}
						/>
					</div>

					<div className={styles.commentList}>
						<h1>Comment</h1>
						{initialCommentData ? (
							<p>コメントはありません。</p>
						) : (
							<p>コメントはありません。</p>
						)}

						<div className={styles.commentAvatar}>
							<div className={styles.avatar}>
								<img src={initialMemoData.user.icon_link} />
							</div>
							コメントする
						</div>
						<div className={styles.FlexTextarea}>
							<div
								className={styles.FlexTextarea__dummy}
								aria-hidden='true'
							></div>
							<textarea
								id='FlexTextarea'
								className={styles.FlexTextarea__textarea}
								onChange={(e) => {
									setInputComment(e.target.value);
								}}
							></textarea>
						</div>
						<div className={styles.commentSendButtonWrap}>
							<button
								className={styles.commentSendButton}
								onClick={() => {
									handleCommentSend();
								}}
							>
								Send
							</button>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default Articles;
