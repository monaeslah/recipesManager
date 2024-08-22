import React from "react";
import MenuItem from "./MenuItem";
import heart from "../styles/images/heart-svgrepo-com.svg";
import add from "../styles/images/add-svgrepo-com.svg";
import book from "../styles/images/book-album-svgrepo-com.svg";
import calendar from "../styles/images/calendar-lines-alt-svgrepo-com.svg";
import list from "../styles/images/list-check-svgrepo-com.svg";
import recent from "../styles/images/time-svgrepo-com.svg";
import search from "../styles/images/search-svgrepo-com .svg";
import tags from "../styles/images/tags-svgrepo-com.svg";
const MainMenu: React.FC = () => {
  return (
    <div className="main-menu">
      <MenuItem title="Add Recipe" icon={add} />
      <MenuItem title="Favourites" icon={heart} />
      <MenuItem title="My Recipes" icon={book} />
      <MenuItem title="Recent Recipes" icon={recent} />
      <MenuItem title="Search" icon={search} />
      <MenuItem title="Meal Planner" icon={calendar} />
      <MenuItem title="Tags" icon={tags} />
      <MenuItem title="Shopping Lists" icon={list} />
    </div>
  );
};

export default MainMenu;
