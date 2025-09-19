// components/CommentList.tsx
import { formatDistanceToNow, parseISO } from "date-fns";
import type { Comment } from "../types/CommentType";
import { ko } from "date-fns/locale";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PostCommentsProps {
  comments: Comment[];
  isOpen: boolean;
}

const PostComments: React.FC<PostCommentsProps> = ({ comments, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col">
      {comments.map((comment, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 border-t border-gray-200 py-2"
        >
          <LazyLoadImage
            src={comment.author?.profileImage}
            alt={comment.author?.nickname}
            className="h-full w-auto rounded-full object-cover"
          />
          <div className="flex flex-col gap-1 text-left">
            <p className="text-sm font-semibold text-black">
              {comment.author?.nickname}
            </p>
            <p className="text-sm text-gray-700">{comment.content}</p>
            <p className="text-xs text-gray-400">
              {formatDistanceToNow(parseISO(comment.createdAt), {
                addSuffix: true,
                locale: ko,
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComments;
