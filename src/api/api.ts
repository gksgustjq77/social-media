import type { Post } from "../\btypes/PostType";
import { mockPosts } from "../mock/mockPosts";

interface ListRequest {
  page: number;
  limit: number;
}

export const getPosts = async (request: ListRequest): Promise<Post[]> => {
  const { page, limit } = request;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockPosts.slice((page - 1) * limit, page * limit) as unknown as Post[];
};
