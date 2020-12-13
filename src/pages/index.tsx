import React from "react";
import { GetServerSideProps } from "next";
import useSWR from "swr";
import Layout from "@/components/organisms/layout";
import Navigation from "@/components/molecules/navigation";
import Memo from "@/components/molecules/memo";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import styles from "@/styles/Top.module.css";
export interface ServerSideProps {
  initialData: Memo_entity[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await fetcher(`${API_URL}/top`);
  return { props: { initialData } };
};

const Top = (props: ServerSideProps) => {
  const { initialData } = props;

  const { data } = useSWR<Memo_entity[], Error>(`${API_URL}/top`, fetcher, {
    initialData,
  });

  const memo = data.map((data, index) => <Memo key={index} memos={data} />);

  return (
    <Layout title="top">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <Navigation />
          <section className={styles.memoList}>{memo}</section>
        </main>
      </div>
    </Layout>
  );
};

export default Top;
