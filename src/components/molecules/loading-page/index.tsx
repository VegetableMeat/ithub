import React from "react";
import Loading from "../loading";
import styles from "./style.module.css";

const LoadingPage = () => {
	return (
		<div className={styles.loadingPage}>
			<Loading />
		</div>
	);
};

export default LoadingPage;
