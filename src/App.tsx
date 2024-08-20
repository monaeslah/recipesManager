import React from "react";

import "./App.css";
import RecipeList from "./components/recipeList";
import RecipeForm from "./components/RecipeForm";
import Header from "./components/header";
import MainMenu from "./components/mainMenu";

function App() {
  return (
    <div className="App">
      <h1>Recipe Manager</h1>
      {/* <RecipeList />
      <RecipeForm /> */}
      <Header />
      <MainMenu />
    </div>
  );
}

export default App;
