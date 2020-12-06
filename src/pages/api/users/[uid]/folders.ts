import type { NextApiRequest, NextApiResponse } from "next";
import folderData from "@/fixtures/folder.json";
// Fake users data
export default (
	req: NextApiRequest,
	res: NextApiResponse<typeof folderData>
) => {
	const {
		query: { uid },
	} = req;
	// Get data from your database
	res.status(200).json(folderData);
};
