import React, { useEffect, useState } from "react";
import Link from "next/link";
import Error from "@/pages/_error";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { API_URL } from "@/libs/api";
import * as ROUTES from "@/constants/routes";

import Avatar from "react-avatar";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import Loading from "@/components/molecules/loading";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
	avatar: {
		height: "100%",
		["@media (max-width: 770px)"]: {},
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
	tab: string;
	userID: string;
};

const MemoList: React.FC<Props> = (props: Props) => {
	const { tab, userID } = props;
	const classes = useStyles();

	const [memos, setMemos] = useState([]);
	const [error, setError] = useState<Error>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			setLoading(true);

			await axios
				.get(`http://localhost:8000/v1/users/${userID}/notes`, {
					params: {
						limit: 12,
					},
				})
				.then((res) => {
					setMemos(res.data);
				})
				.catch((err) => {
					setError(err);
				});

			setLoading(false);
		})();
	}, [tab]);

	if (error) return <Error statusCode={500} />;
	if (loading || !memos) return <Loading />;

	return (
		<article className={styles.memoContainer}>
			{memos.length ? (
				<>
					{memos.map((memo) => (
						<>
							<Link href={`/${userID}/articles/${memo.id}`}>
								<section className={styles.memoWrapper}>
									<div className={styles.profile}>
										<Link href={`/${memo.user.user_id}`}>
											<div className={styles.avatar}>
												<Avatar
													className={classes.avatar}
													alt={memo.user.user_id}
													src={memo.user.icon_link}
													round={true}
												/>
											</div>
										</Link>
										<div className={styles.profileRight}>
											<p className={styles.userName}>{memo.user.name}</p>
											<p className={styles.createdDate}>{memo.created_at}</p>
										</div>
									</div>

									<div className={styles.memo}>
										<h1 className={styles.memoTitle}>{memo.memo_title}</h1>

										<div className={styles.memoInfoWrapper}>
											<div className={styles.tagsWrapper}>
												{memo.tags.map((tag) => (
													<div className={styles.tag}>
														<span
															style={{
																color: "#818181",
																fontWeight: 500,
																fontSize: "15px",
															}}
														>
															#
														</span>
														<div className={styles.tagName}>{tag.name}</div>
													</div>
												))}
											</div>
											<div className={styles.memoInfo}>
												<div className={styles.memoFavo}>
													<MdFavoriteBorder size={"1.1em"} />
													<span className={styles.favoriteText}>
														{memo.favorite_count}
													</span>
												</div>
												<div className={styles.memoComment}>
													<FaRegComment />
													<span className={styles.commentText}>
														{memo.comment_count}
													</span>
												</div>
											</div>
										</div>
									</div>
								</section>
							</Link>
						</>
					))}
				</>
			) : (
				<div className={styles.noneMemoText}></div>
			)}
		</article>
	);
};

export default MemoList;
