import React, { useRef } from "react";

interface Props {
  images: File[];
  setImages: (files: File[]) => void;
}

const ImageUploader: React.FC<Props> = ({ images, setImages }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 4) {
      alert("사진은 4장까지 등록 가능합니다.");
      return;
    }
    if (e.target.files) {
      //      const newFiles = Array.from(e.target.files).slice(0, 4 - images.length);

      setImages([...images, ...e.target.files]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const imagesSelect = () => {
    if (images.length >= 4) {
      alert("사진은 4장까지 등록 가능합니다.");
      return;
    }
    fileInputRef.current?.click();
  };

  return (
    <div>
      <button
        type="button"
        onClick={imagesSelect}
        className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
      >
        📷 사진 선택
      </button>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {images.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-24 w-24 overflow-hidden rounded-md border border-gray-200"
            >
              <img
                src={URL.createObjectURL(img)}
                alt={`preview-${index}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute right-1 top-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
