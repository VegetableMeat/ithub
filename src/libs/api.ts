import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { fetcher } from "@/libs/fetcher";
import { userState } from "@/libs/atom";

export const API_URL = "http://localhost:3000/api";

export const getMe = () => {
	const [user, setUser] = useRecoilState(userState);

	useEffect(() => {
		if (user) return;

		(async () => {
			const userData = await fetcher("http://localhost:8000/v1/me");
			setUser(userData);
			console.log(user);
		})();
	}, []);
};
