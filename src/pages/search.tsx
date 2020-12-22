import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@/components/organisms/layout";
import Memo from "@/components/molecules/memo";
import { API_URL } from "@/libs/api";
import { Memo as Memo_entity } from "@/models/top/memo/entity";
import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import Error from "next/error";
import axios from "axios";
import LoadingPage from "@/components/molecules/loading-page";

export interface ServerSideProps {
  initialData: Memo_entity[];
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const initialData = await axios(`${API_URL}/search`, {
    params: {
      q: query.q,
    },
  }).then((r) => r.data);
  return { props: { initialData } };
};

const Search = (props: ServerSideProps) => {
  const { initialData } = props;
  const router = useRouter();
  const { q } = router.query;
  const [loading, setLoading] = React.useState<boolean>(true);
  const [memos, setMemos] = React.useState<Memo_entity[]>(initialData);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}/search`, {
          params: {
            q: q,
          },
        })
        .then((res) => {
          setMemos(res.data);
        })
        .catch((err) => {
          setError(err);
        });

      setLoading(false);
    })();
  }, [q]);

  if (error) return <Error statusCode={500} />;

  return (
    <Layout title="search">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <div className={styles.searchContainer}>
            {loading ? (
              "now Loading..."
            ) : memos.length ? (
              <>
                「<div className={styles.textLength}>{q}</div>」の該当数は
                {memos.length}件です。
              </>
            ) : (
              <>
                「<div className={styles.textLength}>{q}</div>
                」は見つかりませんでした。
              </>
            )}
          </div>
          {loading ? (
            <LoadingPage />
          ) : memos.length ? (
            <section className={styles.memoList}>
              {memos.map((data, index) => (
                <Memo key={index} memos={data} />
              ))}
            </section>
          ) : null}
        </main>
      </div>
    </Layout>
  );
};

export default Search;
