import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import headerStyle from "@/components/organisms/header/style.module.css";
import style from "./style.module.css";

export const getServerSideProps = async (context) => ({
	props: {
		noLayout: true,
	},
});

const signUp: React.FC = () => {
	const router = useRouter();
	return (
		<div className='noLayout'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
				></meta>
			</Head>
			<header>
				<div className={headerStyle.headerContainer}>
					<div className={headerStyle.headerContents}>
						<div className={headerStyle.titleWrapper}>
							<Image
								className={headerStyle.title}
								src='/icon/title.svg'
								alt='備忘録'
								width='120'
								height='60'
								onClick={() => router.push("/")}
							/>
						</div>
					</div>
				</div>
			</header>
			<main className={style.main}>
				<div className={style.title}>ユーザー設定</div>
				<div className={style.form}>
					<div className={style.inputWrapper}>
						<span>ユーザー名*</span>
						<Input
							className={style.input}
							id={"name"}
							label={"5文字以上で～"}
							type={"text"}
						/>
					</div>
					<div className={style.inputWrapper}>
						<span>ユーザーID*</span>
						<Input
							className={style.input}
							id={"id"}
							label={"5文字以上で～"}
							type={"text"}
						/>
					</div>
					<div className={style.inputWrapper}>
						<span>Github</span>
						<Input
							className={style.input}
							id={"github"}
							label={"GithubのID"}
							type={"text"}
						/>
					</div>
					<div className={style.inputWrapper}>
						<span>Twitter</span>
						<Input
							className={style.input}
							id={"twitter"}
							label={"TwitterのID"}
							type={"text"}
						/>
					</div>
					<Button className={style.submit} func={() => router.push("/")}>
						登録
					</Button>
				</div>
			</main>
		</div>
	);
};

export default signUp;
