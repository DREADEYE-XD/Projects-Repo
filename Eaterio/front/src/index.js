import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./input.css";
import "./index.css";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import ErrorPage from "./error-page";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import LandingPage from "./pages/landingPage";
import Pastas from "./components/menu/pastas";
import Burgers from "./components/menu/burgers";
import Pizzas from "./components/menu/pizzas";
import Product from "./pages/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menu/pastas",
        element: <Pastas />,
      },
      {
        path: "/menu/burgers",
        element: <Burgers />,
      },
      {
        path: "/menu/pizzas",
        element: <Pizzas />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:category/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
