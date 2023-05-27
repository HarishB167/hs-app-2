import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import ErrorPage from "../pages/errorPage";
import Calculator from "../pages/calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "features",
        element: <div>Features : to be build</div>,
      },
      {
        path: "about",
        element: <div>About : to be build</div>,
      },
      {
        path: "contact",
        element: <div>Contact : to be build</div>,
      },
      {
        path: "apps",
        element: <Outlet />,
        children: [{ path: "calculator", element: <Calculator /> }],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
