// import { google } from "googleapis";

// export async function fetchLatestYouTubeVideos() {
//   const API_KEY = process.env.YOUTUBE_API_KEY;
//   const CHANNEL_ID = "UCLb2PgZTcyq1yaV7uuHX4rQ";

//   try {
//     const youtube = google.youtube({
//       version: "v3",
//       auth: API_KEY,
//     });

//     const response = await youtube.search.list({
//       channelId: CHANNEL_ID,
//       part: ["snippet"],
//       maxResults: 5,
//       order: "date",
//       type: ["video"], 
//     });

//     const items = response.data.items || [];

//     return items.map((item) => ({
//       id: item.id?.videoId || "",
//       title: item.snippet?.title || "",
//       thumbnail: item.snippet?.thumbnails?.medium?.url || "",
//       url: `https://www.youtube.com/watch?v=${item.id?.videoId}`,
//       publishedAt: item.snippet?.publishedAt || "",
//     }));
//   } catch (error) {
//     console.error("Error fetching YouTube videos:", error);
//     return [];
//   }
// }
