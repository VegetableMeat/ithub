import React from "react";
import { useRouter } from "next/router";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { userState } from "@/libs/atom";
import type { User } from "@/models/user/entity";

import GoogleLogin from "react-google-login";
import Layout from "@/components/organisms/layout";
import { Alert, AlertTitle } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "@/styles/Login.module.css";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		alert: {
			border: "1px red solid !important",
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
	})
);

const Login: React.FC = () => {
	const classes = useStyles();
	const router = useRouter();
	const [isError, setIsError] = React.useState<boolean>(false);
	const [open, setOpen] = React.useState(false);
	const setUser = useSetRecoilState(userState);

	const handleClose = () => {
		setOpen(false);
	};

	const responseGoogle = async (response: any) => {
		setOpen(true);
		try {
			await axios.post(
				"http://localhost:8000/v1/auth/google/login",
				{
					id_token: response.accessToken,
				},
				{ withCredentials: true }
			);

			const res = await axios.get("http://localhost:8000/v1/me", {
				withCredentials: true,
			});

			setUser(res.data as User);

			!res.data.user_id
				? router.push({ pathname: `/signup` })
				: router.push({ pathname: `/` });
		} catch (error) {
			console.log(error);
			setOpen(false);
			setIsError(true);
		}
	};

	return (
		<Layout title='login'>
			<div className={styles.loginContainer}>
				<main className={styles.main}>
					<span className={styles.title}>ログイン</span>
					<span className={styles.text}>
						下記のボタンで新規登録、ログインの両方を行うことができます。
					</span>

					<GoogleLogin
						buttonText='Googleアカウントでログイン'
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						clientId={
							"598391748066-83j002poq60tii3t5pi64e1578o6nq9c.apps.googleusercontent.com"
						}
					/>
					{isError && (
						<div style={{ marginTop: "15px" }}>
							<Alert className={classes.alert} severity='error'>
								<AlertTitle>Error</AlertTitle>
								ログインに失敗しました。もう一度お試しください。
							</Alert>
						</div>
					)}
				</main>
			</div>
			<Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Layout>
	);
};

export default Login;
