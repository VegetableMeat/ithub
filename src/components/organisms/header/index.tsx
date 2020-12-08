import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Select from "@/components/atoms/select";
import Button from "@/components/atoms/button";
import style from "./style.module.css";

const Header: React.FC = () => {
	const router = useRouter();
	// テストデータ
	const options = [
		{ title: "A" },
		{ title: "B" },
		{ title: "C" },
		{ title: "D" },
		{ title: "E" },
		{ title: "F" },
	];

	return (
		<header>
			<div className={style.headerContainer}>
				<div className={style.headerContents}>
					<div className={style.titleWrapper}>
						<Image
							className={style.title}
							src='/icon/title.svg'
							alt='備忘録'
							width='120'
							height='60'
							onClick={() => router.push("/")}
						/>
					</div>
					<div className={style.contents}>
						<div className={style.searchFieldWrapper}>
							<Select
								className={style.searchField}
								id={"search"}
								label={"タグ検索"}
								options={options}
								limit={1}
							/>
						</div>
						<div className={style.searchButtonWrapper}>
							<Image
								className={style.searchButton}
								src='/icon/search.svg'
								alt='検索'
								width='22'
								height='22'
								onClick={() => {}}
							/>
						</div>
						<div className={style.signUpButtonWrapper}>
							<Button
								className={style.signUpButton}
								func={() => router.push("/login")}
							>
								ログイン
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
