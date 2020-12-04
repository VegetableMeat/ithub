import React from "react";
import ReactLoading from "react-loading";
import styles from "./style.module.css";

const Loading = () => {
	return (
		<div className={styles.loading}>
			<ReactLoading type={"spinningBubbles"} />
		</div>
	);
};

export default Loading;
