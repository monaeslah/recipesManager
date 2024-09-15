import React, { useState } from "react";
import tagsData from "../utils/tags.json";
interface FilterTagsProps {}

const { tags } = tagsData;
const TagSelector: React.FC = () => {
  const [taglist, setTaglist] = useState(tags);
  return (
    <div className="tags">
      <label>Tags</label>
      <div className="tag-list">
        <div className="filter-tags">
          {taglist.map((tag) => (
            <div key={tag.id} className={`tag`} onClick={() => {}}>
              {tag.name}
            </div>
          ))}
        </div>
      </div>
      <button className="manage-tags-btn">Add / Manage tags</button>
    </div>
  );
};

export default TagSelector;
