import { lazy } from "react";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import AddEditProduct from "../pages/AddEditProduct";
import Categories from "../pages/Categories";
import Register from "../pages/register";

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
    private: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    private: true,
  },
  {
    path: "/products",
    element: <Products />,
    private: true,
  },
  {
    path: "/login",
    element: <Login />,
    public: true,
  },
  {
    path: "/register",
    element: <Register />,
    public: true,
  },
  {
    path: "/add-edit-product",
    element: <AddEditProduct />,
    private: true,
  },
  {
    path: "/categories",
    element: <Categories />,
    private: true,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
