// src/components/AddRecipeModal.tsx
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import RecipeForm from "../pages/RecipeForm";
import { useNavigate } from "react-router-dom";
interface AddRecipeModalProps {
  open: boolean;
  onClose: () => void;
}

const AddRecipeModal: React.FC<AddRecipeModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const openRecipes = () => {
    navigate(`/new-recipe`);
  };

  return (
    <Modal open={open} onClose={onClose} center>
      <div className="add-recipe-modal">
        <h2>Add A Recipe</h2>
        <div className="modal-options">
          <button className="modal-button" onClick={openRecipes}>
            <i className="icon-pencil"></i> New blank recipe
          </button>

          <button className="modal-button">
            <i className="icon-website"></i> Import from website
          </button>
          <button className="modal-button">
            <i className="icon-scan"></i> Scan recipe (OCR)
          </button>
          <button className="modal-button">
            <i className="icon-clone"></i> Clone existing recipe
          </button>
          <button className="modal-button">
            <i className="icon-file"></i> From a file
          </button>
        </div>
        <p className="modal-footer">
          ** CookBook supports files containing structured recipe data in HTML,
          Schema Recipe, hRecipe, JSON-LD, etc.
        </p>
      </div>
    </Modal>
  );
};

export default AddRecipeModal;
