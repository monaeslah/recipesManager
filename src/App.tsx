import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RecipeList from "./components/recipeList";
import RecipeForm from "./components/RecipeForm";

function App() {
  return (
    <div className="App">
      <h1>Recipe Manager</h1>
      <RecipeList />
      <RecipeForm />
    </div>
  );
}

export default App;
