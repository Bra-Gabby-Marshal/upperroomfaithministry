"use client";

import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  publishedAt: string;
  liveStatus: "none" | "live" | "upcoming";
};

export default function LatestNews() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVideos();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          Loading Latest YouTube Videos...
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Latest YouTube Videos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* LIVE Badge */}
              {post.liveStatus === "live" && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  LIVE
                </span>
              )}

              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-xs text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()} | YouTube
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
