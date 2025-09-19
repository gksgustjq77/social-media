import type { User } from "./UserType";

export interface Comment {
  author: User;
  content: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
}
