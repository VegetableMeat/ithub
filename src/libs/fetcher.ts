import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const fetcher = (url: string) => axios(url).then((r) => r.data);
