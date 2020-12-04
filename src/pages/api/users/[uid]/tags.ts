import type { NextApiRequest, NextApiResponse } from "next";
import tagData from "@/fixtures/tag.json";
// Fake users data
export default (req: NextApiRequest, res: NextApiResponse<typeof tagData>) => {
	const {
		query: { uid },
	} = req;
	// Get data from your database
	res.status(200).json(tagData);
};
