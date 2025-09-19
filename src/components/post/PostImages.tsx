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
          <LazyLoadImage
            key={idx}
            src={img}
            alt={`image-${idx}`}
            className="cursor-pointer rounded-md object-cover"
            onClick={() => setSelectedImage(idx)}
          />
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
