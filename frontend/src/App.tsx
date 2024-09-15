import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import RecipeForm from "./pages/RecipeForm";
import Header from "./components/header";
import MainMenu from "./components/mainMenu";
import Recipe from "./components/myrecipe/Index";
import Tags from "./pages/Tags";
import Login from "./components/login";
import Register from "./features/register";

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
  {
    path: "/tags",
    element: <Tags />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
