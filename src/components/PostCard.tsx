import type { Post } from "../types/PostType";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostImages from "./PostImages";
import PostActions from "./PostActions";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="space-y-3 rounded-lg bg-white p-4 shadow">
      <PostHeader user={post.author} relativeTime={""} />
      <PostContent content={post.content} />
      <PostImages images={post.images} />
      <PostActions
        likes={post.likes}
        isLiked={post.isLiked}
        retweets={post.retweets}
        isRetweeted={post.isRetweeted}
        comments={post.comments}
        onLike={() => console.log("like", post.id)}
        onRetweet={() => console.log("retweet", post.id)}
      />
    </div>
  );
};

export default PostCard;
