import type { NextApiRequest, NextApiResponse } from "next";
import userData from "@/fixtures/user.json";
// Fake users data
export default (req: NextApiRequest, res: NextApiResponse<typeof userData>) => {
	const {
		query: { pid },
	} = req;
	// Get data from your database
	res.status(200).json(userData);
};
