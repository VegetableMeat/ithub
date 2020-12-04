import React from "react";
import Layout from "@/components/organisms/layout";
import Navigation from "@/components/molecules/navigation";
import Memo from "@/components/molecules/memo";
import styles from "./style.module.css";

import memo from "@/fixtures/top/memo.json";

const Top: React.FC = () => {
  let memos = memo.map((data) => <Memo image={data.image} memo={data.memo} />);

  return (
    <Layout title="top">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <Navigation />
          {memos}
        </main>
      </div>
    </Layout>
  );
};

export default Top;
