import { Home, MessageCircle, Pencil } from "lucide-react";
import { useAtom } from "jotai";
import { activeTabAtom } from "../../atoms/tabAtom";

const FooterNav: React.FC = () => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto max-w-xl border-t border-gray-200 bg-white">
      <nav className="flex h-12 items-center justify-around p-2 text-gray-600">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center border-none text-xs focus:outline-none ${
            activeTab === "home" ? "text-blue-500" : "hover:text-blue-500"
          }`}
        >
          <Home size={22} />
          <span>홈</span>
        </button>

        <button
          onClick={() => setActiveTab("write")}
          className={`flex flex-col items-center border-none text-xs focus:outline-none ${
            activeTab === "write" ? "text-blue-500" : "hover:text-blue-500"
          }`}
        >
          <Pencil size={22} />
          <span>글쓰기</span>
        </button>

        <button
          onClick={() => setActiveTab("chat")}
          className={`flex flex-col items-center border-none text-xs focus:outline-none ${
            activeTab === "chat" ? "text-blue-500" : "hover:text-blue-500"
          }`}
        >
          <MessageCircle size={22} />
          <span>채팅</span>
        </button>
      </nav>
    </footer>
  );
};

export default FooterNav;
