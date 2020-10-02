import { NowRequest, NowResponse } from "@vercel/node";
import fetch from "node-fetch";
import { renderToString } from "react-dom/server";
import flags from "../flags.json";
import qs from "querystring";

import Pronouns from "../components/pronouns";

export default async function (req: NowRequest, res: NowResponse) {
  const gradients = await fetch(
    "https://uigradients.com/gradients.json"
  ).then((res) => res.json());

  const [base = "", query = ""] = req.url.slice(1).split("?");
  const text = decodeURIComponent(base);
  const q = qs.parse(query);
  let gradient = "";
  let flag = "";
  if (typeof q.flag === "string") {
    flag = flags[q.flag].value;
  }
  if (typeof q.gradient === "string") {
    let def = gradients.find(
      (gradient) =>
        gradient.name.toLowerCase() ===
        decodeURI(q.gradient as string).toLowerCase()
    );
    console.log(q.gradient, def);
    if (def) {
      gradient = `linear-gradient(to right, ${def.colors
        .map((v) => v.toLowerCase())
        .join(", ")})`;
    }
  }

  res.setHeader("Content-Type", "image/svg+xml");

  const svg = renderToString(
    Pronouns({ children: text, image: flag || gradient })
  );
  return res.status(200).send(svg);
}
