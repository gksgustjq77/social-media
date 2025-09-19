import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "../apis/api";
import type { Post } from "../types/PostType";
import PostCard from "../components/PostCard";
import { mockCategories } from "../mock/mockCategories";

const sortOptions = [
  { value: "newest", label: "최신순" },
  { value: "oldest", label: "오래된순" },
];

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");

  const resetAndFetch = async () => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
    const data = await getPosts({
      page: 1,
      limit: 5,
      category: selectedCategory || null,
      sort: sortBy,
    });
    setPosts(data);
    setPage(2);
    if (data.length < 5) setHasMore(false);
  };

  const fetchPosts = async () => {
    const data = await getPosts({
      page,
      limit: 5,
      category: selectedCategory || null,
      sort: sortBy,
    });

    if (data.length === 0) {
      setHasMore(false);
      return;
    }

    setPosts((prev) => [...prev, ...data]);
    setPage((p) => p + 1);
  };

  useEffect(() => {
    resetAndFetch();
  }, [selectedCategory, sortBy]);

  return (
    <div className="mx-auto max-w-xl">
      <div className="sticky top-0 z-50 flex flex-col gap-2 rounded-lg bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap justify-start gap-2 sm:justify-start">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full border px-3 py-1 focus:outline-none active:outline-none ${
              selectedCategory === null
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-gray-300 bg-white text-gray-700"
            } text-sm`}
          >
            전체
          </button>

          {mockCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full border px-3 py-1 text-sm font-semibold focus:outline-none active:outline-none ${
                selectedCategory === cat.id
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-300 bg-white text-gray-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-2 flex justify-start sm:mt-0 sm:justify-end">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "oldest")}
            className="rounded border px-2 py-1 text-sm"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4 className="text-center">...</h4>}
        endMessage={
          <p className="text-center text-gray-500">
            더 이상 게시물이 없습니다.
          </p>
        }
      >
        <div className="mt-2 space-y-4">
          {posts.map((post, idx) => (
            <PostCard key={`${post.id}-${idx}`} post={post} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default FeedPage;
