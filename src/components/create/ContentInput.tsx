import React from "react";

interface Props {
  content: string;
  setContent: (value: string) => void;
}

const ContentInput: React.FC<Props> = ({ content, setContent }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value.slice(0, 280));
  };

  return (
    <div>
      <textarea
        className="w-full resize-none whitespace-pre-wrap break-all rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="무슨 일이 일어나고 있나요?"
        rows={4}
        value={content}
        onChange={handleChange}
      />
      <p className="text-right text-sm text-gray-500">{content.length} / 280</p>
    </div>
  );
};

export default ContentInput;
