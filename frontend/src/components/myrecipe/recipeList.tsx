// src/components/RecipeList.tsx
import React from "react";
import RecipeCard from "./recipeCard";

interface RecipeListProps {
  recipes: any[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
