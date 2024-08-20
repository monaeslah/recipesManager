import React from "react";

const TagSelector: React.FC = () => {
  return (
    <div className="tags">
      <label>Tags</label>
      <div className="tag-list">
        <span className="tag">Appetizers</span>
        <span className="tag">Asian</span>
        {/* Add more tags here */}
      </div>
      <button className="manage-tags-btn">Add / Manage tags</button>
    </div>
  );
};

export default TagSelector;
