import type { Post } from "../\btypes/PostType";
import { mockPosts } from "../mock/mockPosts";

interface ListRequest {
  page: number;
  limit: number;
  category?: number | null;
  sort?: string;
}

export const getPosts = async ({
  page,
  limit,
  category = null,
  sort = "newest",
}: ListRequest): Promise<Post[]> => {
  let data = [...mockPosts];

  if (category !== null && category !== 0) {
    data = data.filter((post) => post.category === category);
  }

  data = data.sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.slice((page - 1) * limit, page * limit) as Post[];
};

export const toggleLike = async (postId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
};
