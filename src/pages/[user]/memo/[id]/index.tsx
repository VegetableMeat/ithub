import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Id: NextPage = () => {
	const router = useRouter();
	const { user, id } = router.query;
	return (
		<div>
			<p>
				user:{user}さんの備忘録です。備忘録id:{id}
			</p>
		</div>
	);
};

export default Id;
