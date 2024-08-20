// src/components/MenuItem.tsx
import React from "react";

interface MenuItemProps {
  title: string;
  icon: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  return (
    <div className="menu-item">
      <div className="menu-item__icon">
        <img src={icon} alt="" />
      </div>
      <div className="menu-item__title">{title}</div>
    </div>
  );
};

export default MenuItem;
