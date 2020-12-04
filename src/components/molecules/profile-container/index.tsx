import React from "react";
import { responseInterface } from "swr";
import Profile from "@/components/molecules/profile";
import type { User } from "@/models/user/entity";
import { API_ERROR_MESSAGE } from "@/constants/messages";
import styles from "./style.module.css";

type Props = {
	user: responseInterface<User, Error>;
};

const ProfileContainer: React.FC<Props> = (props: Props) => {
	const { user } = props;
	const { data, error } = user;
	return (
		<div className={styles.profile}>
			{!error ? (
				<Profile user={data}>{data}</Profile>
			) : (
				<div className={styles.tagErrorMessage}>
					<p>{API_ERROR_MESSAGE}</p>
				</div>
			)}
		</div>
	);
};

export default ProfileContainer;
