import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import RecipeForm from "./pages/RecipeForm";
import Header from "./components/header";
import MainMenu from "./components/mainMenu";
import Recipe from "./components/myrecipe/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/new-recipe",
    element: <RecipeForm />,
  },
  {
    path: "/my-recipe",
    element: <Recipe />,
  },
]);
const App = () => {
  const [theRouter, setTheRouter] = useState(router);
  return (
    <div className="App">
      <Header />

      <RouterProvider router={theRouter} />
      <ToastContainer />
      {/* <RecipeList />
      <RecipeForm /> */}
    </div>
  );
};
export default App;
