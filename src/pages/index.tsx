import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@/components/organisms/layout";
import Navigation from "@/components/molecules/navigation";
import Memo from "@/components/molecules/memo";
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
  const initialData = await axios(`${API_URL}/top`, {
    params: {
      navi: query.navi,
    },
  }).then((r) => r.data);
  return { props: { initialData } };
};

const Top = (props: ServerSideProps) => {
  const { initialData } = props;
  const router = useRouter();
  const { navi } = router.query;
  const [loading, setLoading] = React.useState<boolean>(true);
  const [memos, setMemos] = React.useState<Memo_entity[]>(initialData);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}/top`, {
          params: {
            navi: navi,
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
  }, [navi]);

  if (error) return <Error statusCode={500} />;

  return (
    <Layout title="top">
      <div className={styles.topContainer}>
        <main className={styles.mainContainer}>
          <Navigation query={navi} />

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

export default Top;
