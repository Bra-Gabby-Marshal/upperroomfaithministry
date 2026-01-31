// lib/tiktok.ts
export async function fetchLatestTikTokPosts(username: string) {
  const res = await fetch(
    `https://tiktok33.p.rapidapi.com/user/posts?username=${username}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
        "X-RapidAPI-Host": "tiktok33.p.rapidapi.com",
      },
    }
  );

  const data = await res.json();

  return data.posts.map((post: any) => ({
    id: post.id,
    title: post.caption,
    videoUrl: post.video_url,
    thumbnail: post.cover,
    publishedAt: post.create_time,
    url: `https://www.tiktok.com/@${username}/video/${post.id}`,
  }));
}
