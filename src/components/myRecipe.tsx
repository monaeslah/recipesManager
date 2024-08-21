// src/App.tsx
import React, { useState } from "react";

import SearchBar from "./searchBar";
import FilterTags from "./filterTaag";
import RecipeList from "./recipeList";

const Recipe: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Sample data
  const recipes = [
    {
      id: 1,
      name: "Berry Acai Bowl",
      description: "Healthy and refreshing acai bowl with fresh berries.",
      tags: ["Breakfast", "Healthy", "Lunch", "Smoothies", "Vegetarian"],
      imageUrl: "path_to_image",
    },
    {
      id: 2,
      name: "Homemade Lemonade",
      description: "Fresh and zesty lemonade, perfect for summer.",
      tags: ["Drinks"],
      imageUrl: "path_to_image",
    },
    {
      id: 3,
      name: "Pumpkin Soup",
      description: "Creamy and comforting pumpkin soup, perfect for autumn.",
      tags: ["Appetizers", "Dinner", "Lunch", "Soup", "Vegetarian"],
      imageUrl: "path_to_image",
    },
  ];

  // Filter and search logic
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTags.length === 0 ||
        recipe.tags.some((tag: string) => selectedTags.includes(tag)))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>CookBook</h1>
      </header>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterTags
        tags={[
          "Appetizers",
          "Breakfast",
          "Dinner",
          "Drinks",
          "Healthy",
          "Lunch",
          "Smoothies",
          "Soup",
          "Vegetarian",
        ]}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Recipe;
