import React from "react";

export const getServerSideProps = async (context) => ({
  props: {
    layout: true
  }
});

const Top: React.FC = () => {
  return (
    <div>
      ここはTOP
    </div>
  );
};

export default Top;
