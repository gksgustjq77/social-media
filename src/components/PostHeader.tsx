import type { User } from "../types/UserType";

interface PostHeaderProps {
  user: User;
  relativeTime: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ user, relativeTime }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={user.profileImage} className="h-10 w-10 rounded-full" />
      <span className="font-semibold">{user.name}</span>
      <span className="text-sm text-gray-500">{relativeTime}</span>
    </div>
  );
};

export default PostHeader;
