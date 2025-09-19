import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PostImageModal from "./PostImageModal";

interface PostImagesProps {
  images?: string[];
}

const PostImages: React.FC<PostImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const onChangeIndex = (idx: number) => {
    setSelectedImage(idx);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative flex h-40 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-gray-100"
            onClick={() => setSelectedImage(idx)}
          >
            <LazyLoadImage
              src={img}
              alt={`image-${idx}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <PostImageModal
        isOpen={selectedImage !== null}
        images={images}
        currentIndex={selectedImage || 0}
        onChangeIndex={onChangeIndex}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};

export default PostImages;
