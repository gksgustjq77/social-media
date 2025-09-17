interface PostActionsProps {
  likes: number;
  isLiked: boolean;
  retweets: number;
  isRetweeted: boolean;
  comments: number;
  onLike: () => void;
  onRetweet: () => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  likes,
  isLiked,
  retweets,
  isRetweeted,
  comments,
  onLike,
  onRetweet,
}) => {
  const likeImg = isLiked
    ? "/images/free-icon-hearts-red.png"
    : "/images/free-icon-heart-empty.png";

  const retweetImg = isRetweeted
    ? "/images/free-icon-retweet-on.png"
    : "/images/free-icon-retweet-off.png";

  return (
    <div className="flex justify-around text-sm text-gray-500">
      <button onClick={onLike} className="flex hover:text-blue-500">
        <img src={likeImg} className="max-w-[20px]"></img> &nbsp;좋아요&nbsp;
        {likes}
      </button>
      <button onClick={onRetweet} className="flex hover:text-green-500">
        <img src={retweetImg} className="max-w-[20px]"></img> &nbsp;리트윗&nbsp;
        {retweets}
      </button>
      <button className="flex hover:text-gray-700">
        <img src={"/images/comment.png"} className="max-w-[20px]"></img>
        &nbsp;댓글&nbsp;{comments}
      </button>
    </div>
  );
};

export default PostActions;
