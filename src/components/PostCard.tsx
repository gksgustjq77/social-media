// PostCard.tsx
import { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostImages from "./PostImages";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import type { Post } from "../\btypes/PostType";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="space-y-5 rounded-lg bg-white p-4 shadow">
      <PostHeader user={post.author} createdAt={post.createdAt} />
      <PostContent content={post.content} categoryName={post.categoryName} />
      <PostImages images={post.images} />
      <PostActions
        likes={post.likes}
        isLiked={post.isLiked}
        retweets={post.retweets}
        isRetweeted={post.isRetweeted}
        comments={post.comments}
        onLike={() => console.log("like", post.id)}
        onRetweet={() => console.log("retweet", post.id)}
        onCommentToggle={() => setShowComments((prev) => !prev)}
      />

      <PostComments comments={post.commentList} isOpen={showComments} />
    </div>
  );
};

export default PostCard;
