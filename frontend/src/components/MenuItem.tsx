import React from "react";

interface MenuItemProps {
  title: string;
  icon: string;
  onPage: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon, onPage }) => {
  return (
    <div className="menu-item" onClick={onPage}>
      <div className="menu-item__icon">
        <img src={icon} alt={title} />
      </div>
      <div className="menu-item__title">{title}</div>
    </div>
  );
};

export default MenuItem;
