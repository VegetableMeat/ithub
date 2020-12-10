import React, { useState } from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/organisms/layout";
import "easymde/dist/easymde.min.css";

import axios from "axios";
import { API_URL } from "@/libs/api";

const DynamicComponentWithNoSSR = dynamic(
	() => import("react-simplemde-editor"),
	{ ssr: false }
);

const Articles = () => {
	const [markdown, setMarkdown] = useState("");

	React.useEffect(() => {
		axios
			.post(`http://localhost:8000`, {
				mark: markdown,
			})
			.then((res) => {
				console.log(res.data);
			});
	}, [markdown]);

	return (
		<Layout title={""}>
			<DynamicComponentWithNoSSR onChange={(e) => setMarkdown(e)} />
		</Layout>
	);
};

export default Articles;
