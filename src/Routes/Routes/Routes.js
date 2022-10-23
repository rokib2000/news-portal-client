import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch("https://news-portal-server-lac.vercel.app/news");
        },
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: async ({ params }) => {
          return fetch(`https://news-portal-server-lac.vercel.app/category/${params.id}`);
        },
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
    ],
  },
]);
