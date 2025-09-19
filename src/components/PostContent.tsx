interface PostContentProps {
  content: string;
  categoryName: string;
}

const PostContent: React.FC<PostContentProps> = ({ content, categoryName }) => {
  const hashFilter = () => {
    return content.split(" ").map((c, idx) => {
      if (c.startsWith("#")) {
        return (
          <span key={idx} className="text-blue-500">
            {c}{" "}
          </span>
        );
      }
      return (
        <span key={idx} className="text-black">
          {c}{" "}
        </span>
      );
    });
  };
  return (
    <div className="text-left">
      <p className="text-gray-500">{categoryName}</p>
      <p className="whitespace-pre-wrap text-left">{hashFilter()}</p>
    </div>
  );
};

export default PostContent;
