interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
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
  return <p className="whitespace-pre-wrap text-left">{hashFilter()}</p>;
};

export default PostContent;
