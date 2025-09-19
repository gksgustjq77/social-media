import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PostImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onChangeIndex: (idx: number) => void;
  onClose: () => void;
}

const PostImageModal: React.FC<PostImageModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onChangeIndex,
  onClose,
}) => {
  if (!isOpen || !images) return null;

  const handleImages = (type: "prev" | "next") => {
    if (type === "prev") {
      if (currentIndex > 0) {
        onChangeIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex < images.length - 1) {
        onChangeIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center">
        <img
          src={images[currentIndex]}
          alt="post-image"
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
        />

        <button
          onClick={() => handleImages("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border-none bg-white p-1 shadow hover:bg-gray-200 focus:outline-none active:outline-none"
        >
          <ChevronLeft size={32} className="text-gray-700" />
        </button>

        <button
          onClick={() => handleImages("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border-none bg-white p-1 shadow hover:bg-gray-200 focus:outline-none active:outline-none"
        >
          <ChevronRight size={32} className="text-gray-700" />
        </button>

        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 rounded-full border-none bg-white p-1 shadow hover:bg-gray-200 focus:outline-none active:outline-none"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default PostImageModal;
