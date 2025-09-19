// FeedPage.tsx
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "../apis/api";
import type { Post } from "../types/PostType";
import PostCard from "../components/post/PostCard";
import FeedHeader from "../components/header/FeedHeader";

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
      <FeedHeader
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

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
