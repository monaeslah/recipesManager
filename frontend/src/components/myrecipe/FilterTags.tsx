// src/components/FilterTags.tsx
import React, { useState } from "react";
import tagsData from "../../utils/tags.json";
interface FilterTagsProps {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const { tags } = tagsData;
const FilterTags: React.FC<FilterTagsProps> = ({ selectedTags, toggleTag }) => {
  const [taglist, setTaglist] = useState(tags);
  return (
    <div className="filter-tags ">
      {taglist.map((tag) => (
        <button
          key={tag.id}
          className={`tag body-small ${
            selectedTags.includes(tag.name) ? "selected" : ""
          }`}
          onClick={() => toggleTag(tag.name)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
