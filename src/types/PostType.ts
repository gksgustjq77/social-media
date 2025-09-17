import type { Comment } from "./CommentType";
import type { User } from "./UserType";

export interface Post {
  id: number;
  author: User;
  content: string;
  images: string[];
  category: number;
  categoryName: string;
  createdAt: string;
  likes: number;
  retweets: number;
  comments: number;
  isLiked: boolean;
  isRetweeted: boolean;
  hasMoreComments: boolean;
  commentList?: Comment;
}
