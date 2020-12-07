import React from "react";
import useSWR from "swr";
import Loading from "@/components/molecules/loading";
import Layout from "@/components/organisms/layout";
import Navigation from "@/components/molecules/navigation";
import Memo from "@/components/molecules/memo";
import styles from "./style.module.css";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import { API_URL } from "@/libs/api";

const Top: React.FC = () => {
  const { data } = useSWR<Memo_entity[], Error>(`${API_URL}/top`);

  return (
    <Layout title="top">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <Navigation />
          {!data ? <Loading /> : data.map((data) => <Memo memos={data} />)}
        </main>
      </div>
    </Layout>
  );
};

export default Top;
