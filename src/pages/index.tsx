import { useAtom } from "jotai";
import { activeTabAtom } from "../atoms/tabAtom";
import FeedPage from "./feedPage";
import WritePage from "./writePage";
import FooterNav from "../components/footer/FooterNav";

const IndexPage: React.FC = () => {
  const [activeTab] = useAtom(activeTabAtom);

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <FeedPage />;
      case "write":
        return <WritePage />;
      case "chat":
        return <div>채팅 화면 준비중...</div>;
      default:
        return <FeedPage />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{renderPage()}</main>
      <FooterNav />
    </div>
  );
};

export default IndexPage;
