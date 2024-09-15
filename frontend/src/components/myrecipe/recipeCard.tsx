// src/components/RecipeCard.tsx
import React from "react";

interface RecipeCardProps {
  recipe: any;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.name} />
      <div className="recipe-details">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <div>
          {recipe.prep}
          {recipe.cook}
        </div>
        <div className="tags">
          {recipe.selectedTags.map((tag: string) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
