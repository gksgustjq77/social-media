import type { User } from "../types/UserType";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ko } from "date-fns/locale";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PostHeaderProps {
  user: User;
  createdAt: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ user, createdAt }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <LazyLoadImage
          src={user.profileImage}
          alt={user.nickname}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="font-semibold text-black">{user.nickname}</span>
      </div>
      <span className="text-sm text-gray-500">
        {formatDistanceToNow(parseISO(createdAt), {
          addSuffix: true,
          locale: ko,
        })}
      </span>
    </div>
  );
};

export default PostHeader;
