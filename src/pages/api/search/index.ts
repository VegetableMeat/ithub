import type { NextApiRequest, NextApiResponse } from "next";
import { Memo } from "@/models/top/memo/entity";
import java from "@/fixtures/search/java.json";
import js from "@/fixtures/search/js.json";
import noData from "@/fixtures/search/no-data.json";
import php from "@/fixtures/search/php.json";
import python from "@/fixtures/search/python.json";
// Fake users data
export default (req: NextApiRequest, res: NextApiResponse<Memo[] | []>) => {
  // Get data from your database
  const {
    query: { q },
  }: any = req;
  let array = [];
  if (q.match(/.*(react)|(js).*/gi)) array = array.concat(js);
  if (q.match(/.*(java).*/gi)) array = array.concat(java);
  if (q.match(/.*(php).*/gi)) array = array.concat(php);
  if (q.match(/.*(python).*/gi)) array = array.concat(python);

  array.length ? res.status(200).json(array) : res.status(200).json(noData);
};
