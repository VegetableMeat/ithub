import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "@/components/organisms/layout";
import FolderContainer from "@/components/organisms/folder/folder-container";
import Sidebar from "@/components/organisms/sidebar";
import styles from "./style.module.css";
import type { User } from "@/models/user/entity";
import type { Folder } from "@/models/folder/entity";
import { API_URL } from "@/libs/api";

const UserIndex: React.FC = () => {
  const router = useRouter();
  const userID = router.query.user;
  if (!userID) {
    return null;
  }
  const user = useSWR<User, Error>(`${API_URL}/users/${userID}`);
  const folders = useSWR<Folder[], Error>(`${API_URL}/users/${userID}/folders`);
  return (
    <Layout title={userID}>
      <div className={styles.userContainer}>
        <main className={styles.folderListContainer}>
          <FolderContainer folders={folders} />
        </main>
        <Sidebar user={user} userID={userID as string} />
      </div>
    </Layout>
  );
};

export default UserIndex;
