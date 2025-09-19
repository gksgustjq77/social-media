import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PostActionsProps {
  likes: number;
  isLiked: boolean;
  retweets: number;
  isRetweeted: boolean;
  comments: number;
  onLike: () => void;
  onRetweet: () => void;
  onCommentToggle: () => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  likes,
  isLiked,
  retweets,
  isRetweeted,
  comments,
  onLike,
  onRetweet,
  onCommentToggle,
}) => {
  const likeImg = isLiked
    ? "/images/free-icon-hearts-red.png"
    : "/images/free-icon-heart-empty.png";

  const retweetImg = isRetweeted
    ? "/images/free-icon-retweet-on.png"
    : "/images/free-icon-retweet-off.png";

  return (
    <div className="flex justify-around text-sm text-gray-500">
      <button
        onClick={onLike}
        className={`flex items-center border-none focus:outline-none active:border-none active:outline-none ${
          isLiked ? "text-red-500" : "hover:text-red-500"
        }`}
      >
        <LazyLoadImage src={likeImg} alt="like" className="max-w-[20px]" />{" "}
        &nbsp;좋아요&nbsp;{likes}
      </button>

      <button
        onClick={onRetweet}
        className={`flex items-center border-none focus:outline-none active:border-none active:outline-none ${
          isRetweeted ? "text-blue-500" : "hover:text-blue-500"
        }`}
      >
        <LazyLoadImage
          src={retweetImg}
          alt="retweet"
          className="max-w-[20px]"
        />{" "}
        &nbsp;리트윗&nbsp;{retweets}
      </button>

      <button
        onClick={onCommentToggle}
        className="flex items-center border-none hover:text-gray-700 focus:outline-none active:outline-none"
      >
        <LazyLoadImage
          src="/images/comment.png"
          alt="comment"
          className="max-w-[20px]"
        />
        &nbsp;댓글&nbsp;{comments}
      </button>
    </div>
  );
};

export default PostActions;
