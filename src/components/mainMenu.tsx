import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import heart from "../assets/images/heart-svgrepo-com.svg";
import add from "../assets/images/add-svgrepo-com.svg";
import book from "../assets/images/book-album-svgrepo-com.svg";
import calendar from "../assets/images/calendar-lines-alt-svgrepo-com.svg";
import list from "../assets/images/list-check-svgrepo-com.svg";
import recent from "../assets/images/time-svgrepo-com.svg";
import search from "../assets/images/search-svgrepo-com .svg";
import tags from "../assets/images/tags-svgrepo-com.svg";
import AddRecipeModal from "./addRecipeModal";
const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isAddRecipeModalOpen, setAddRecipeModalOpen] = useState(false);

  const handleAddRecipeClick = () => {
    setAddRecipeModalOpen(true);
  };

  const closeAddRecipeModal = () => {
    setAddRecipeModalOpen(false);
  };

  const handleFavouritesClick = () => {
    console.log("Navigating to Favourites page");
    navigate(`/favourites`);
  };

  const handleMyRecipesClick = () => {
    console.log("Navigating to My Recipes page");
    navigate(`/my-recipe`);
  };

  const handleRecentRecipesClick = () => {
    console.log("Navigating to Recent Recipes page");
    navigate(`/new-recipe`);
  };

  const handleSearchClick = () => {
    console.log("Navigating to Search page");
    navigate(`/my-recipe`);
  };

  const handleMealPlannerClick = () => {
    console.log("Navigating to Meal Planner page");
    navigate(`/new-recipe`);
  };

  const handleTagsClick = () => {
    console.log("Navigating to Tags page");
    navigate("/tags");
  };

  const handleShoppingListsClick = () => {
    console.log("Navigating to Shopping Lists page");
    navigate(`/new-recipe`);
  };

  return (
    <div className="main-menu">
      <MenuItem title="Add Recipe" icon={add} onPage={handleAddRecipeClick} />
      <MenuItem
        title="Favourites"
        icon={heart}
        onPage={handleFavouritesClick}
      />
      <MenuItem title="My Recipes" icon={book} onPage={handleMyRecipesClick} />
      <MenuItem title="Search" icon={search} onPage={handleSearchClick} />
      <MenuItem
        title="Meal Planner"
        icon={calendar}
        onPage={handleMealPlannerClick}
      />
      <MenuItem title="Tags" icon={tags} onPage={handleTagsClick} />
      <MenuItem
        title="Recent Recipes"
        icon={recent}
        onPage={handleRecentRecipesClick}
      />
      <MenuItem
        title="Shopping Lists"
        icon={list}
        onPage={handleShoppingListsClick}
      />{" "}
      <AddRecipeModal
        open={isAddRecipeModalOpen}
        onClose={closeAddRecipeModal}
      />
    </div>
  );
};

export default MainMenu;
