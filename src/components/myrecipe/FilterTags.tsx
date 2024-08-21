// src/components/FilterTags.tsx
import React from "react";

interface FilterTagsProps {
  tags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({
  tags,
  selectedTags,
  toggleTag,
}) => {
  return (
    <div className="filter-tags">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`tag ${selectedTags.includes(tag) ? "selected" : ""}`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
