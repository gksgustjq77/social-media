interface PostImagesProps {
  images?: string[];
}

const PostImages: React.FC<PostImagesProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((img, idx) => (
        <img key={idx} src={img} className="rounded-md object-cover" />
      ))}
    </div>
  );
};

export default PostImages;
