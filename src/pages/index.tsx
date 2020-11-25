import React from "react";
import style from "./style.module.css"
import Main from "@/components/organisms/main"
import SideMenu from "@/components/organisms/sideMenu"

export const getServerSideProps = async (context) => ({
  props: {
    layout: true
  }
});

const Top: React.FC = () => {
  return (
    <main>
      <Main>
        ここはTOP
      </Main>
    </main>
  );
};

export default Top;
