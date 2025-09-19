// PostCard.tsx
import { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostImages from "./PostImages";
import PostActions from "./PostActions";
import PostComments from "./PostComments";
import type { Post } from "../\btypes/PostType";
import { toggleLike } from "../apis/api";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(post.isLiked);
  const [likes, setLikes] = useState<number>(post.likes);

  const [isRetweeted, setIsRetweeted] = useState<boolean>(post.isLiked);
  const [retweets, setRetweets] = useState<number>(post.likes);

  const onClickLike = async (postId: number) => {
    const { success } = await toggleLike(postId);

    if (success) {
      setIsLiked((prev) => !prev);
      setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    }
  };

  const onClickRetweete = async (postId: number) => {
    const { success } = await toggleLike(postId);

    if (success) {
      setIsRetweeted((prev) => !prev);
      setRetweets((prev) => (isRetweeted ? prev - 1 : prev + 1));
    }
  };

  return (
    <div className="space-y-5 rounded-lg bg-white p-4 shadow">
      <PostHeader user={post.author} createdAt={post.createdAt} />
      <PostContent content={post.content} categoryName={post.categoryName} />
      <PostImages images={post.images} />
      <PostActions
        likes={likes}
        isLiked={isLiked}
        retweets={retweets}
        isRetweeted={isRetweeted}
        comments={post.comments}
        onLike={() => onClickLike(post.id)}
        onRetweet={() => onClickRetweete(post.id)}
        onCommentToggle={() => setShowComments((prev) => !prev)}
      />

      <PostComments comments={post.commentList} isOpen={showComments} />
    </div>
  );
};

export default PostCard;
