// pages/index.tsx
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "../api/api";
import type { Post } from "../types/PostType";
import PostCard from "../components/PostCard";

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    const data = await getPosts({ page, limit: 5 });
    if (data.length === 0) {
      setHasMore(false);
      return;
    }
    setPosts((prev) => [...prev, ...data]);
    setPage((p) => p + 1);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="mx-auto max-w-xl p-4">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4 className="text-center">로딩중...</h4>}
        endMessage={
          <p className="text-center text-gray-500">더 이상 게시물이 없습니다</p>
        }
      >
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default FeedPage;
