import type { NextApiRequest, NextApiResponse } from "next";
import memoData from "@/fixtures/top/home.json";
// Fake users data
export default (req: NextApiRequest, res: NextApiResponse<typeof memoData>) => {
  // Get data from your database
  res.status(200).json(memoData);
};