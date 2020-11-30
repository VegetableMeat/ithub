import React from "react";
import style from "./style.module.css";
import Navigation from "@/components/molecules/navigation";
import Main from "@/components/organisms/main";
import SideMenu from "@/components/organisms/sideMenu";
import Memo from "@/components/molecules/memo";

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
    <main>
      <Main>
        <Navigation />
        {memo}
      </Main>
    </main>
  );
};

export default Top;
