import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PostImagesProps {
  images?: string[];
}

const PostImages: React.FC<PostImagesProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((img, idx) => (
        <LazyLoadImage
          key={idx}
          src={img}
          alt={`image-${idx}`}
          effect="blur"
          className="rounded-md object-cover"
        />
      ))}
    </div>
  );
};

export default PostImages;
