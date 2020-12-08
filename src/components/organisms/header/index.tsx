import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Select from "@/components/atoms/select";
import Button from "@/components/atoms/button";
import styles from "./style.module.css";

const Header: React.FC = () => {
  const router = useRouter();
  // テストデータ
  const options = [
    { title: "A" },
    { title: "B" },
    { title: "C" },
    { title: "D" },
    { title: "E" },
    { title: "F" },
  ];

  const pathname = router.pathname.replace(/\//g, "");

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContents}>
          <div className={styles.titleWrapper}>
            <Image
              className={styles.title}
              src="/icon/title.svg"
              alt="備忘録"
              width="120"
              height="60"
              onClick={() => router.push("/")}
            />
          </div>
          {pathname === "login" || pathname === "signUp" ? null : (
            <div className={styles.contents}>
              <div className={styles.searchFieldWrapper}>
                <Select
                  className={styles.searchField}
                  id={"search"}
                  label={"タグ検索"}
                  options={options}
                  limit={1}
                />
              </div>
              <div className={styles.searchButtonWrapper}>
                <Image
                  className={styles.searchButton}
                  src="/icon/search.svg"
                  alt="検索"
                  width="22"
                  height="22"
                  onClick={() => {}}
                />
              </div>
              <div className={styles.signUpButtonWrapper}>
                <Button
                  className={styles.signUpButton}
                  func={() => router.push("/login")}
                >
                  ログイン
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
