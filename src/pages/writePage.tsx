import React, { useState, useEffect } from "react";
import CategorySelect from "../components/create/CategorySelect";
import ContentInput from "../components/create/ContentInput";
import ImageUploader from "../components/create/ImageUploader";
import type { Post } from "../\btypes/PostType";
import { mockPosts } from "../mock/mockPosts";
import { currentUser } from "../mock/currentUser";
import { mockCategories } from "../mock/mockCategories";
import { activeTabAtom } from "../atoms/tabAtom";
import { useAtom } from "jotai";

const WritePage: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [posts, _] = useState<Post[]>(mockPosts as unknown as Post[]);
  const [, setActiveTab] = useAtom(activeTabAtom);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!category) {
      alert("카테고리를 선택해주세요.");
      return false;
    }

    const imageUrls = images.map((f) => URL.createObjectURL(f));
    const maxId = Math.max(...posts.map((p) => p.id));
    const newPost: Post = {
      id: maxId + 1,
      author: {
        name: currentUser.name,
        nickname: currentUser.nickname,
        profileImage: currentUser.profileImage,
        verified: currentUser.verified,
      },
      content: content,
      images: imageUrls,
      category: mockCategories.find((m) => m.name === category)?.id || 0,
      categoryName: category,
      createdAt: new Date().toISOString(),
      likes: 0,
      retweets: 0,
      comments: 0,
      isLiked: false,
      isRetweeted: false,
      hasMoreComments: false,
      commentList: [],
    };
    mockPosts.unshift(newPost);

    alert("게시글이 등록되었습니다 ✅");
    setCategory("");
    setContent("");
    setImages([]);

    setActiveTab("home");
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="mb-4 text-lg font-bold">✍️ 글쓰기</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <CategorySelect category={category} setCategory={setCategory} />
        <ContentInput content={content} setContent={setContent} />
        <ImageUploader images={images} setImages={setImages} />
        <button
          type="submit"
          className="self-end rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
