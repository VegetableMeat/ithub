import React from "react";
import style from "./style.module.css";
import Main from "@/components/organisms/main";
import SideMenu from "@/components/organisms/sideMenu";
import Memo from "@/components/molecules/memo";
import Layout from "@/components/organisms/layout";

const Top: React.FC = () => {
	// テストデータ
	const test = [
		{
			image: {
				src: "/icon/search.svg",
				alt: "画像",
				width: 50,
				height: 50,
			},
			memo: {
				title: "テスト",
				icon: "テスト",
				user_name: "テスト",
				user_id: 0,
				update_time: "2020-11-27",
				favorite: 10,
			},
		},
	];

	let memo = test.map((data) => <Memo image={data.image} memo={data.memo} />);

	return (
		<Layout title={"top"}>
			<Main>{memo}</Main>
		</Layout>
	);
};

export default Top;
