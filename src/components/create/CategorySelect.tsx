import React from "react";
import { mockCategories } from "../../mock/mockCategories";

interface Props {
  category: string;
  setCategory: (value: string) => void;
}

const CategorySelect: React.FC<Props> = ({ category, setCategory }) => {
  return (
    <div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="" disabled>
          카테고리를 선택해주세요
        </option>
        {mockCategories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
