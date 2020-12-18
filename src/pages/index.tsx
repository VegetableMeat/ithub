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
import { useRouter } from "next/router";
import Error from "next/error";
import LoadingPage from "@/components/molecules/loading-page";
import axios from "axios";

export interface ServerSideProps {
  initialData: Memo_entity[];
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const naviQuery = query.navi === void 0 ? "" : query.navi;
  const initialData = await fetcher(`${API_URL}/top/${naviQuery}`);
  return { props: { initialData } };
};

const Top = (props: ServerSideProps) => {
  const { initialData } = props;
  const router = useRouter();
  const naviQuery = router.query.navi || "";
  const [loading, setLoading] = React.useState<boolean>(true);
  const [memos, setMemos] = React.useState<Memo_entity[]>(initialData);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}/top/${naviQuery}`)
        .then((res) => {
          setMemos(res.data);
        })
        .catch((err) => {
          setError(err);
        });

      setLoading(false);
    })();
  }, [naviQuery]);

  if (error) return <Error statusCode={500} />;

  return (
    <Layout title="top">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <Navigation query={naviQuery} />

          {loading ? (
            <LoadingPage />
          ) : memos.length ? (
            <section className={styles.memoList}>
              {memos.map((data, index) => (
                <Memo key={index} memos={data} />
              ))}
            </section>
          ) : (
            <div>ないです</div>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Top;
