import React from "react";
import style from "./style.module.css";
import Navigation from "@/components/molecules/navigation";
import Main from "@/components/organisms/main";
import Memo from "@/components/molecules/memo";
import Layout from "@/components/organisms/layout";

const Top: React.FC = () => {
  // テストデータ
  let test = [];

  for (let i = 0; i < 10; i++) {
    test.push({
      image: {
        src: "/icon/search.svg",
        alt: "画像",
        width: 50,
        height: 50,
      },
      memo: {
        title: "React + TypeScriptのチュートリアル",
        icon: "R",
        user_name: "React",
        user_id: "react_type",
        update_time: "1日前",
        favorite: 10,
      },
    });
  }

	let memo = test.map((data) => <Memo image={data.image} memo={data.memo} />);

	return (
		<Layout title={"top"}>
			<Main><Navigation />{memo}</Main>
		</Layout>
	);
};

export default Top;
