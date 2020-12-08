import type { NextApiRequest, NextApiResponse } from "next";
import memoData from "@/fixtures/memo.json";
// Fake users data
export default (req: NextApiRequest, res: NextApiResponse<typeof memoData>) => {
	const {
		query: { uid },
	} = req;
	// Get data from your database
	res.status(200).json(memoData);
};
