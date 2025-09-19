// components/CommentList.tsx
import { formatDistanceToNow, parseISO } from "date-fns";
import type { Comment } from "../types/CommentType";
import { ko } from "date-fns/locale";

interface PostCommenstProps {
  comments: Comment[];
  isOpen: boolean;
}

const PostComments: React.FC<PostCommenstProps> = ({ comments, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div
      className={`flex flex-col overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {comments.map((comment, idx) => (
        <div
          key={idx}
          className="flex items-start items-center gap-4 border-t border-gray-200 py-2"
        >
          <img
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
              {" "}
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
