// src/components/MenuItem.tsx
import React, { useState } from "react";
import AddRecipeModal from "./addRecipeModal";

interface MenuItemProps {
  title: string;
  icon: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModalf = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="menu-item" onClick={openModal}>
        <div className="menu-item__icon">
          <img src={icon} alt="" />
        </div>
        <div className="menu-item__title">{title}</div>
      </div>
      <AddRecipeModal open={isModalOpen} onClose={closeModalf} />
    </>
  );
};

export default MenuItem;
