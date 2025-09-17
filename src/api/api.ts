import type { Post } from "../\btypes/PostType";
import { mockPosts } from "../mock/mockPosts";

export const getPosts = async (request: any): Promise<Post[]> => {
  const { page, limit } = request;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockPosts.slice((page - 1) * limit, page * limit);
};
