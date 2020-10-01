import { NowRequest, NowResponse } from "@vercel/node";
import { renderToString } from "react-dom/server";
import flags from "../flags.json";
import qs from "querystring";

import Pronouns from "../components/pronouns";

export default async function (req: NowRequest, res: NowResponse) {
  const [base = "", query = ""] = req.url.slice(1).split("?");
  const text = decodeURIComponent(base);
  const q = qs.parse(query);
  let flag = "";
  if (typeof q.flag === "string") {
    flag = flags[q.flag];
  }

  res.setHeader("Content-Type", "image/svg+xml");

  const svg = renderToString(Pronouns({ children: text, flag }));
  return res.status(200).send(svg);
}
