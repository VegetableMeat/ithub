import React from "react";
import Layout from "@/components/organisms/layout";
import Navigation from "@/components/molecules/navigation";
import Memo from "@/components/molecules/memo";
import styles from "./style.module.css";

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
    <Layout title="top">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <Navigation />
          {memo}
        </main>
      </div>
    </Layout>
  );
};

export default Top;
