import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "@/libs/atom";
import type { User } from "@/models/user/entity";
import axios from "axios";

import ImageUploading, { ImageListType } from "react-images-uploading";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Layout from "@/components/organisms/layout";
import styles from "@/styles/SignUp.module.css";

const useStyles = makeStyles(() => ({
	textField: {
		width: "100%",
	},
	twitter: {
		width: "70%",
	},
	twitterImage: {
		width: "25%",
		height: "25%",
	},
	github: {
		width: "70%",
	},
	githubImage: {
		width: "25%",
		height: "25%",
	},
	readOnly: {
		width: "30%",
		verticalAlign: "bottom",
	},
	submitButton: {
		width: "100%",
		height: "40px",
		marginTop: "30px",
		color: "#FFF",
		backgroundColor: "#3e2924",
		"&:hover": {
			backgroundColor: "#3e2924c5",
		},
	},
}));

const SignUp: React.FC = () => {
	const router = useRouter();
	const classes = useStyles();
	const [user, setUser] = useRecoilState(userState);
	const [name, setName] = React.useState<string>(null);
	const [userID, setUserID] = React.useState<string>(null);
	const [image, setImage] = React.useState<ImageListType>(null);
	const [imageUrl, setImageUrl] = React.useState<string>(null);

	useEffect(() => {
		if (!user) return;

		setImageUrl(user.icon_link);
	}, []);

	const handleImageUpload = (image: ImageListType) => {
		setImage(image);
		const params = new FormData();
		params.append("image", image[0].file);

		(async () => {
			try {
				const res = await axios.post(
					`http://localhost:8000/static/images/upload`,
					params,
					{
						headers: {
							"content-type": "multipart/form-data",
						},
					}
				);
				console.log(res.data);
				setImageUrl(res.data.link);
				console.log(imageUrl);
			} catch (error) {
				console.log(error);
			}
		})();
	};

	const handleSubmit = async () => {
		if (!name || !userID || !imageUrl) return;

		try {
			const res = await axios.put(
				"http://localhost:8000/v1/users/",
				{
					user_id: userID,
					name: name,
					icon_link: imageUrl ? imageUrl : user ? user.icon_link : null,
					twitter_link: null,
					github_link: null,
					user_text: null,
				},
				{ withCredentials: true }
			);

			await axios.get("http://localhost:8000/v1/auth/reflesh", {
				withCredentials: true,
			});

			setUser(res.data as User);
			router.push({ pathname: `/` });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Layout title='signup' noneHeader>
			<div className={styles.signUpContainer}>
				<main className={styles.main}>
					<div className={styles.title}>ユーザー設定</div>
					<div className={styles.form}>
						<ImageUploading
							value={image}
							onChange={handleImageUpload}
							acceptType={["png", "jpg"]}
						>
							{({ onImageUpload }) => (
								<div className={styles.avatar}>
									<img
										onClick={onImageUpload}
										src={imageUrl ? imageUrl : user ? user.icon_link : null}
									/>
								</div>
							)}
						</ImageUploading>

						<div className={styles.inputWrapper}>
							<TextField
								className={classes.textField}
								required
								id='userName'
								label='ユーザー名'
								InputLabelProps={{
									shrink: true,
								}}
								variant='filled'
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className={styles.inputWrapper}>
							<TextField
								className={classes.textField}
								required
								id='userId'
								label='ユーザーID'
								InputLabelProps={{
									shrink: true,
								}}
								variant='filled'
								onChange={(e) => {
									setUserID(e.target.value);
								}}
							/>
						</div>
						<div className={styles.inputWrapper_}>
							<TextField
								className={classes.readOnly}
								defaultValue='https://github.com/'
								InputProps={{
									readOnly: true,
								}}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								className={classes.github}
								id='github'
								label='GitHubのID'
								InputLabelProps={{
									shrink: true,
								}}
								variant='filled'
							/>
						</div>
						<div className={styles.inputWrapper_}>
							<TextField
								className={classes.readOnly}
								defaultValue='https://twitter.com/'
								InputProps={{
									readOnly: true,
								}}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								className={classes.twitter}
								id='twitter'
								label='TwitterのID'
								InputLabelProps={{
									shrink: true,
								}}
								variant='filled'
							/>
						</div>
						<div className={styles.buttonWrapper}>
							<Button
								className={classes.submitButton}
								variant='contained'
								onClick={handleSubmit}
							>
								登録
							</Button>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default SignUp;
