import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import SearchBar from "./searchBar";
import FilterTags from "./FilterTags";
import RecipeList from "./recipeList";
import { Recipe, RecipesState } from "../../types/interface";

const AllRecipe: React.FC = () => {
  const reduxRecipes = useSelector((state: any) => state.recipes.recipes);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (reduxRecipes) {
      setRecipes(reduxRecipes);
    }
  }, [reduxRecipes]);

  const filteredRecipes = recipes
    .map((recipe) => recipe)
    .filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedTags.length === 0 ||
          recipe.selectedTags.some((tag: string) => selectedTags.includes(tag)))
    );

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="app-container body-small">
      <header>
        <span className="heading-small">CookNote</span>
      </header>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterTags selectedTags={selectedTags} toggleTag={toggleTag} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default AllRecipe;
