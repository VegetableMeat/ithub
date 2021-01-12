import React from "react";
import styles from "./style.module.css";

type Props = {};

const Footer: React.FC<Props> = (props) => {
	return (
		<footer className={styles.footer}>
			<h1 className={styles.footerTitle}>Contact us.</h1>
			<div className={styles.footerRow}>
				<div className={styles.footerCol}>
					<a className={styles.footerLink} href={"#"}>
						About
					</a>
					<a className={styles.footerLink} href={"#"}>
						運営者
					</a>
				</div>

				<div className={styles.footerCol}>
					<a className={styles.footerLink} href={"#"}>
						ご意見
					</a>
					<a className={styles.footerLink} href={"#"}>
						ヘルプ
					</a>
				</div>

				<div className={styles.footerCol}>
					<a className={styles.footerLink} href={"#"}>
						利用規約
					</a>
					<a className={styles.footerLink} href={"#"}>
						プライバシーポリシー
					</a>
				</div>
			</div>
			<h1 className={styles.footerText}>©︎ Okayama Information Correge</h1>
		</footer>
	);
};

export default Footer;
