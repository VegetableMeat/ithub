import React from "react";

import { GoChevronRight } from "react-icons/go";
import styles from "./style.module.css";

type Props = {};

const AffiliationProfile: React.FC<Props> = (props: Props) => {
	return (
		<article className={styles.affiliationProfileContainer}>
			<div className={styles.titleWrapper}>
				<h1 className={styles.title}>所属</h1>
			</div>

			<div className={styles.detailTextWrapper}>
				<div className={styles.detailTextBlock}>
					<GoChevronRight size={"20"} />
					<p className={styles.detail}>専門学校岡山情報ビジネス学院</p>
				</div>
			</div>
		</article>
	);
};

export default AffiliationProfile;
