import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import ErrorPage from "../pages/errorPage";
import InBuiltApps from "../pages/inBuiltApps";
import Calculator from "../pages/calculator";
import RockPaperScissor from "../pages/rockPaperScissor";
import Stopwatch from "../pages/stopwatch";
import PasswordGenerator from "../pages/passwordGenerator";
import TicTacToe from "../pages/ticTacToe";
import NoteApp from "../pages/noteApp";
import WeatherApp from "../pages/weatherApp";
import ChatApp from "../pages/chatApp";
import Login from "../components/chatApp/login";
import SignUp from "../components/chatApp/signup";

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
        path: "inbuiltapps",
        element: <InBuiltApps />,
      },
      {
        path: "apps",
        element: <Outlet />,
        children: [
          { path: "calculator", element: <Calculator /> },
          {
            path: "rock-paper-scissor",
            element: <RockPaperScissor />,
          },
          {
            path: "stopwatch",
            element: <Stopwatch />,
          },
          {
            path: "password-generator",
            element: <PasswordGenerator />,
          },
          {
            path: "tic-tac-toe",
            element: <TicTacToe />,
          },
          {
            path: "note-app",
            element: <NoteApp />,
          },
          {
            path: "weather-app",
            element: <WeatherApp />,
          },
          {
            path: "chat-app",
            element: <ChatApp />,
            children: [
              { path: "login", element: <Login /> },
              { path: "signup", element: <SignUp /> },
            ],
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
