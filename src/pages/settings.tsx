import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Error from "next/error";
import { useRouter } from "next/router";
import useSWR from "swr";
import MediaQuery from "react-responsive";
import Layout from "@/components/organisms/layout";
import Loading from "@/components/molecules/loading";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import type { User } from "@/models/user/entity";
import styles from "@/styles/Settings.module.css";
import {
	Avatar,
	Button,
	Fab,
	IconButton,
	InputBase,
	makeStyles,
	Popper,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { GrTwitter, GrGithub } from "react-icons/gr";
import { FaHashtag } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Tag as TagEntity } from "@/models/tag/entity";
import { Autocomplete } from "@material-ui/lab";
import tagData from "@/fixtures/tag.json";

const useStyles = makeStyles(() => ({
	avatar: {
		width: "100px",
		height: "100px",
	},
	input: {
		width: "100%",
		color: "var(--placeholder-color);",
		"& .MuiInputBase-input": {
			padding: "10px",
		},
		"&.MuiInputBase-multiline": {
			padding: "0",
		},
	},
	iconButton: {
		width: "33px",
		height: "33px",
		padding: "10px",
		backgroundColor: "var(--accent-color)",
		borderRadius: "50%",
		"&:hover": {
			backgroundColor: "var(--button-hover-color)",
		},
	},
	addIcon: {
		width: "20px",
		height: "20px",
		color: "var(--header-button-text-color)",
		cursor: "pointer",
		"&:hover": {
			color: "var(--header-button-text-color)",
		},
	},
	tag: {
		marginRight: "4px",
		marginBottom: "4px",
		color: "var(--tag-font-color)",
		fontSize: "13px",
		minWidth: "0px",
		backgroundColor: "var(--tag-background-color)",
		border: "1px var(--accent-color) solid",
		height: "22px",
		textTransform: "none",
		cursor: "default",
		"&:hover": {
			backgroundColor: "var(--tag-background-color)",
		},
	},
	tagName: {
		fontFamily: ["Inter", "sans-serif"].join(","),
		marginLeft: "3px",
		fontWeight: 500,
	},
	autoListbox: {
		padding: "0",
	},
	autoOption: {
		transition: "none",
		backgroundColor: "transparent",
		fontSize: "14px",
		color: "var(--header-menu-text-color)",
		paddingLeft: "10px",
		paddingRight: "12px",
		"&:first-child": {
			backgroundColor: "transparent",
		},
		"&:hover": {
			transition: "none",
			color: "#FFF",
			backgroundColor: "var(--header-menu-hover-background-color) !important",
		},
		"&[data-focus='true']": {
			backgroundColor: "var(--header-background-color)",
		},
		"&[aria-selected='true']": {
			backgroundColor: "var(--header-background-color)",
		},
	},
	autoPaper: {
		border: "1px solid var(--header-paper-border-color)",
		backgroundColor: "var(--header-paper-background-color)",
		borderRadius: "0px",
	},
	closeCircle: {
		marginRight: "4px",
		"&:hover": {
			cursor: "pointer",
		},
	},
	button: {
		textTransform: "none",
		width: "200px",
		height: "35px",
		color: "var(--header-button-text-color);",
		backgroundColor: "var(--accent-color);",
		"&:hover": {
			backgroundColor: "var(--button-hover-color);",
		},
	},
}));

export interface ServerSideProps {
	initialUserData: User;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const initialUserData = await fetcher(`${API_URL}/users/test`);
	return { props: { initialUserData } };
};

const Settings = (props: ServerSideProps) => {
	const initialData = props.initialUserData;
	const classes = useStyles();

	const { data, error } = useSWR(`${API_URL}/users/test`, fetcher, {
		initialData,
	});

	const [postData, setPostData] = React.useState<User>(data);
	// const [tags, setTags] = React.useState<TagEntity[]>(data.follow_tags);
	const [tag, setTag] = React.useState<string>("");
	const [options, setOptions] = React.useState<TagEntity[]>(tagData);
	const [openPopper, setOpen] = React.useState<boolean>(false);

	const handleSetTag = (value: string) => {
		let result = "";
		tagData.forEach((e) => {
			if (e.name === value) {
				return (result = value);
			}
		});

		if (result !== "") {
			setTag(result);
		}
	};

	const handleAddTag = (value: string) => {
		const result = postData.follow_tags.filter((e) => {
			return e.name === value;
		});
		if (value !== "" && result.length === 0) {
			setPostData({
				...postData,
				follow_tags: [
					...postData.follow_tags,
					...tagData.filter((e) => {
						if (e.name === value) {
							return e;
						}
					}),
				],
			});
		}
	};

	const handleRemoveTag = (value: string) => {
		const result = postData.follow_tags.filter((e) => {
			return e.name !== value;
		});

		setPostData({
			...postData,
			follow_tags: result,
		});
	};

	const handleAdd = (value: string, key: string) => {
		setPostData({
			...postData,
			[key]: value,
		});
	};

	if (error) return <Error statusCode={500} />;
	if (!data) return <Loading />;

	return (
		<Layout title='settings'>
			<div className={styles.settingsContainer}>
				<main className={styles.mainContainer}>
					<div className={styles.userIcon}>
						<Avatar
							className={classes.avatar}
							alt={data.name}
							src={data.icon_link}
						/>
					</div>
					<div className={styles.profileSettings}>
						<div className={styles.inputField}>
							<InputBase
								className={classes.input}
								aria-controls={open ? "menu-list-grow" : undefined}
								aria-haspopup='true'
								placeholder='Name'
								inputProps={{ "aria-label": "name" }}
								value={postData.name}
								onChange={(e) => {
									handleAdd(e.target.value, "name");
								}}
								spellCheck={false}
							/>
						</div>
						<div
							className={styles.inputField}
							style={{
								marginTop: "20px",
							}}
						>
							<InputBase
								className={classes.input}
								aria-controls={open ? "menu-list-grow" : undefined}
								aria-haspopup='true'
								placeholder='Profile'
								inputProps={{ "aria-label": "profile" }}
								value={postData.user_text}
								multiline
								rows={5}
								onChange={(e) => {
									handleAdd(e.target.value, "user_text");
								}}
								spellCheck={false}
							/>
						</div>
						<div className={styles.links}>
							<div className={styles.linkContainer}>
								<div className={styles.label}>
									<GrGithub size={"25px"} style={{ marginRight: "2px" }} />
									Github
								</div>
								<div className={styles.inputField}>
									<InputBase
										className={classes.input}
										aria-controls={open ? "menu-list-grow" : undefined}
										aria-haspopup='true'
										placeholder='user id'
										inputProps={{ "aria-label": "id" }}
										value={postData.github_link}
										onChange={(e) => {
											handleAdd(e.target.value, "github_link");
										}}
										spellCheck={false}
									/>
								</div>
							</div>
							<div className={styles.linkContainer}>
								<div className={styles.label}>
									<GrTwitter size={"25px"} style={{ marginRight: "2px" }} />
									Twitter
								</div>
								<div className={styles.inputField}>
									<InputBase
										className={classes.input}
										aria-controls={open ? "menu-list-grow" : undefined}
										aria-haspopup='true'
										placeholder='user id'
										inputProps={{ "aria-label": "id" }}
										value={postData.twitter_link}
										onChange={(e) => {
											handleAdd(e.target.value, "twitter_link");
										}}
										spellCheck={false}
									/>
								</div>
							</div>
						</div>
						<div className={styles.label} style={{ marginTop: "20px" }}>
							所属
						</div>
						<div className={styles.inputField}>
							<InputBase
								className={classes.input}
								aria-controls={open ? "menu-list-grow" : undefined}
								aria-haspopup='true'
								placeholder='所属を入力'
								inputProps={{ "aria-label": "belongs" }}
								// value={postData.name}
								// onChange={(e) => {
								//   handleAdd(e.target.value, "name");
								// }}
								spellCheck={false}
							/>
						</div>
					</div>
					<div className={styles.tags}>
						<div className={styles.label}>タグ</div>
						{postData.follow_tags.length ? (
							<div className={styles.tagsContainer}>
								{postData.follow_tags.map((tag) => (
									<Button key={tag.id} disableRipple className={classes.tag}>
										<IoIosCloseCircle
											className={classes.closeCircle}
											color={"var(--tag-font-color)"}
											size={"14px"}
											onClick={() => {
												handleRemoveTag(tag.name);
											}}
										/>
										<FaHashtag color={"var(--tag-font-color)"} size={"10px"} />
										<span className={classes.tagName}>{tag.name}</span>
									</Button>
								))}
							</div>
						) : (
							<div className={styles.noneTagText}>
								登録しているタグはありません
							</div>
						)}
					</div>
					<div className={styles.addTags}>
						<Autocomplete
							open={openPopper}
							classes={{
								listbox: classes.autoListbox,
								option: classes.autoOption,
								paper: classes.autoPaper,
							}}
							id='combo-box'
							options={options}
							getOptionLabel={(option) => option.name}
							style={{ marginRight: "5px" }}
							renderInput={(params) => (
								<div className={styles.tagsButton} ref={params.InputProps.ref}>
									<InputBase
										{...params.inputProps}
										className={classes.input}
										aria-controls={open ? "menu-list-grow" : undefined}
										aria-haspopup='true'
										placeholder='Select tags'
										inputProps={{ "aria-label": "tags" }}
										onSelect={(e) => {}}
										spellCheck={false}
										onFocus={() => {
											setOpen(true);
										}}
										onBlur={() => {
											setOpen(false);
										}}
									/>
								</div>
							)}
						/>
						<IconButton
							className={classes.iconButton}
							aria-label='menu'
							onClick={() => {
								handleAddTag(tag);
							}}
							children={<Add className={classes.addIcon} />}
						/>
					</div>
					<div
						style={{
							width: "100%",
							display: "flex",
							marginTop: "20px",
							justifyContent: "center",
						}}
					>
						<Button className={classes.button}>登録</Button>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default Settings;
