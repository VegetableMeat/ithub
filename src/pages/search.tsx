import React from "react";
import { GetServerSideProps } from "next";
import useSWR from "swr";
import Layout from "@/components/organisms/layout";
import Memo from "@/components/molecules/memo";
import { fetcher } from "@/libs/fetcher";
import { API_URL } from "@/libs/api";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import Error from "next/error";

export interface ServerSideProps {
  initialData: Memo_entity[];
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // const topQuery = !query.navi ? "home" : query.navi;
  const initialData = await fetcher(`${API_URL}/search/`);
  return { props: { initialData } };
};

const Search = (props: ServerSideProps) => {
  const { initialData } = props;
  const router = useRouter();

  const { data, error } = useSWR<Memo_entity[], Error>(
    `${API_URL}/search/`,
    fetcher,
    {
      initialData,
    }
  );

  if (error) return <Error statusCode={500} />;

  const memo = data.map((data, index) => <Memo key={index} memos={data} />);

  return (
    <Layout title="search">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <div className={styles.searchContainer}></div>
          <section className={styles.memoList}>{memo}</section>
        </main>
      </div>
    </Layout>
  );
};

export default Search;
