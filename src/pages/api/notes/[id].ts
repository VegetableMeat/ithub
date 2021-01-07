import type { NextApiRequest, NextApiResponse } from "next";
import markdownData from "@/fixtures/memo-md2.json";
// Fake users data
export default (
	req: NextApiRequest,
	res: NextApiResponse<typeof markdownData>
) => {
	const {
		query: { uid },
	} = req;
	// Get data from your database
	res.status(200).json(markdownData);
};
