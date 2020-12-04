import type { NextApiRequest, NextApiResponse } from "next";
import followData from "@/fixtures/follow.json";
// Fake users data
export default (
	req: NextApiRequest,
	res: NextApiResponse<typeof followData>
) => {
	const {
		query: { uid },
	} = req;
	// Get data from your database
	res.status(200).json(followData);
};
