import { NowRequest, NowResponse } from "@vercel/node";
import { renderToString } from "react-dom/server";

import { Player } from "../components/NowPlaying";

export default async function (req: NowRequest, res: NowResponse) {
  console.log(req.params);

  res.setHeader("Content-Type", "image/svg+xml");

  const text = renderToString(
    Player({ cover: coverImg, artist, track, isPlaying, progress, duration })
  );
  return res.status(200).send(text);
}
