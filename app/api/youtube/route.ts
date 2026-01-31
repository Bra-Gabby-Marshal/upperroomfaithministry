// import { NextResponse } from "next/server";
// import { google } from "googleapis";

// export async function GET() {
//   const API_KEY = process.env.YOUTUBE_API_KEY;
//   const CHANNEL_ID = "UCLb2PgZTcyq1yaV7uuHX4rQ";

//   try {
//     const youtube = google.youtube({ version: "v3", auth: API_KEY });

//     const response = await youtube.search.list({
//       channelId: CHANNEL_ID,
//       part: ["snippet"],
//       maxResults: 5,
//       order: "date",
//       type: ["video"],
//     });

//     const items = response.data.items || [];

//     const videos = items.map((item) => ({
//       id: item.id?.videoId || "",
//       title: item.snippet?.title || "",
//       thumbnail: item.snippet?.thumbnails?.medium?.url || "",
//       url: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
//       publishedAt: item.snippet?.publishedAt || "",
//       liveStatus: item.snippet?.liveBroadcastContent || "none", // new field
//     }));

//     return NextResponse.json(videos);
//   } catch (error) {
//     console.error("YouTube API error:", error);
//     return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCLb2PgZTcyq1yaV7uuHX4rQ";

  try {
    const youtube = google.youtube({ version: "v3", auth: API_KEY });

    // 1️⃣ Get latest video IDs
    const searchRes = await youtube.search.list({
      channelId: CHANNEL_ID,
      part: ["id"],
      maxResults: 5,
      order: "date",
      type: ["video"],
    });

    const videoIds =
      searchRes.data.items
        ?.map((item) => item.id?.videoId)
        .filter((id): id is string => Boolean(id)) ?? [];

    if (!videoIds.length) {
      return NextResponse.json([]);
    }

    // 2️⃣ Fetch accurate video details
    const videoRes = await youtube.videos.list({
      part: ["snippet", "liveStreamingDetails"],
      id: videoIds,
    });

    const videos =
      videoRes.data.items?.map((item: any) => ({
        id: item.id ?? "",
        title: item.snippet?.title ?? "",
        thumbnail: item.snippet?.thumbnails?.medium?.url ?? "",
        url: `https://www.youtube.com/watch?v=${item.id}`,
        publishedAt:
          item.liveStreamingDetails?.actualStartTime ??
          item.snippet?.publishedAt ??
          "",
        liveStatus: item.snippet?.liveBroadcastContent ?? "none",
      })) ?? [];

    // 3️⃣ Latest first
    videos.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );

    return NextResponse.json(videos);
  } catch (error) {
    console.error("YouTube API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
