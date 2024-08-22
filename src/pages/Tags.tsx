// src/components/FilterTags.tsx
import React, { useState } from "react";
import tagsData from "../utils/tags.json";
interface FilterTagsProps {}

const { tags } = tagsData;
const FilterTags: React.FC<FilterTagsProps> = () => {
  const [taglist, setTaglist] = useState<string[]>(tags);
  return (
    <div className="filter-tags">
      {taglist.map((tag) => (
        <div key={tag} className={`tag`} onClick={() => {}}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default FilterTags;
