import React from "react";
import { useRouter } from "next/router";

import { CgClose } from "react-icons/cg";
import styles from "./style.module.css";

type Props = {
	handleSubmit;
};

const WriteHeader: React.FC<Props> = (props) => {
	const { handleSubmit } = props;
	const router = useRouter();

	return (
		<header className={styles.writeHeader}>
			<div className={styles.headerContainer}>
				<div
					className={styles.headerLeft}
					onClick={() =>
						router.push({
							pathname: `/`,
						})
					}
				>
					<CgClose
						style={{
							fontSize: "24px",
							color: "var(--base-color)",
						}}
					/>
				</div>
				<div className={styles.headerRight} onClick={handleSubmit}>
					投稿する
				</div>
			</div>
		</header>
	);
};

export default WriteHeader;
