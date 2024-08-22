// src/components/FilterTags.tsx
import React, { useState } from "react";
import tagsData from "../../utils/tags.json";
interface FilterTagsProps {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const { tags } = tagsData;
const FilterTags: React.FC<FilterTagsProps> = ({ selectedTags, toggleTag }) => {
  const [taglist, setTaglist] = useState<string[]>(tags);
  return (
    <div className="filter-tags ">
      {taglist.map((tag) => (
        <button
          key={tag}
          className={`tag body-small ${
            selectedTags.includes(tag) ? "selected" : ""
          }`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
