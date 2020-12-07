import React from "react";
import useSWR from "swr";
import Layout from "@/components/organisms/layout";
import Navigation from "@/components/molecules/navigation";
import Memo from "@/components/molecules/memo";
import styles from "./style.module.css";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import { API_URL } from "@/libs/api";

const Top: React.FC = () => {
  const { data } = useSWR<Memo_entity[], Error>(`${API_URL}/top`);
  const memo = data.map((data) => <Memo memos={data} />);

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
