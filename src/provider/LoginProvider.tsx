import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState, followingState } from "@/libs/atom";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import type { User } from "@/models/user/entity";
import type { Follows } from "@/models/follows/entity";
import axios from "axios";

const LoginProvider = (props) => {
	const [user, setUser] = useRecoilState(userState);
	const [follows, setFollows] = useRecoilState(followingState);
	const [cookies, setCookie] = useCookies();
	const router = useRouter();

	useEffect(() => {
		if (!cookies._session) return;

		const init = async () => {
			const res = await axios.get("http://localhost:8000/v1/me", {
				withCredentials: true,
			});

			if (res.data) {
				setUser(res.data as User);
			}

			if (!res.data.user_id) {
				router.push({ pathname: `/signup` });
			}

			const followsRes = await axios.get(
				`http://localhost:8000/v1/users/${res.data.user_id}/follows`,
				{
					withCredentials: true,
				}
			);

			if (followsRes.data) {
				setFollows(followsRes.data as Follows[]);
			}
		};

		init();
	}, []);

	return <>{props.children}</>;
};

export default LoginProvider;
