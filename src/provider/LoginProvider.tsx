import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/libs/atom";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import type { User } from "@/models/user/entity";
import axios from "axios";

const LoginProvider = (props) => {
	const [user, setUser] = useRecoilState(userState);
	const [cookies, setCookie] = useCookies();
	const router = useRouter();

	useEffect(() => {
		if (!cookies._session) return;

		const getMe = async () => {
			const res = await axios.get("http://localhost:8000/v1/me", {
				withCredentials: true,
			});

			if (res.data) {
				setUser(res.data as User);
			}

			if (!res.data.user_id) {
				router.push({ pathname: `/signup` });
			}
		};
		getMe();
	}, []);

	return <>{props.children}</>;
};

export default LoginProvider;
