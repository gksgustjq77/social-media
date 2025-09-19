import { mockCategories } from "../../mock/mockCategories";

interface FeedHeaderProps {
  selectedCategory: number | null;
  onCategoryChange: (id: number | null) => void;
  sortBy: "newest" | "oldest";
  onSortChange: (sort: "newest" | "oldest") => void;
}

const sortOptions = [
  { value: "newest", label: "최신순" },
  { value: "oldest", label: "오래된순" },
];

const FeedHeader: React.FC<FeedHeaderProps> = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="sticky top-0 z-50 flex flex-col gap-2 rounded-lg bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap justify-start gap-2 sm:justify-start">
        <button
          onClick={() => onCategoryChange(null)}
          className={`rounded-full border px-3 py-1 focus:outline-none active:outline-none ${
            selectedCategory === null
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-300 bg-white text-gray-700"
          } text-sm`}
        >
          전체
        </button>

        {mockCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`rounded-full border px-3 py-1 text-sm font-semibold focus:outline-none active:outline-none ${
              selectedCategory === cat.id
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-gray-300 bg-white text-gray-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="mt-2 flex justify-start sm:mt-0 sm:justify-end">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
          className="rounded border px-2 py-1 text-sm"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FeedHeader;
