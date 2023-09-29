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
import AboutMe from "../pages/AboutMe";
import ContactForm from "../pages/ContactForm";
import Portfolio from "../pages/Portfolio";
import { Flex } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      {
        path: "",
        element: <AboutMe />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "inbuiltapps",
        element: <InBuiltApps />,
      },
    ],
  },
  {
    path: "/apps",
    element: (
      <Flex h="100vh" w="100vw" justifyContent="center">
        <Outlet />
      </Flex>
    ),
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
    ],
  },
]);

export default router;
