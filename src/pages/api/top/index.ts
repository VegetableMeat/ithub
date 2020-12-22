import type { NextApiRequest, NextApiResponse } from "next";
import { Memo } from "@/models/top/memo/entity";
import home from "@/fixtures/top/home.json";
import recommend from "@/fixtures/top/recommend.json";
import popular from "@/fixtures/top/popular.json";
// Fake users data
export default (req: NextApiRequest, res: NextApiResponse<Memo[]>) => {
  // Get data from your database
  const {
    query: { navi },
  } = req;
  switch (navi) {
    case "recommend":
      res.status(200).json(recommend);
      break;
    case "popular":
      res.status(200).json(popular);
      break;
    default:
      res.status(200).json(home);
  }
};
