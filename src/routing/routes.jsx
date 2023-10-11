import { createBrowserRouter, Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import App from "../App";
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
import VRPage from "../pages/landingPages/VRPage";

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
    element: <Outlet />,
    children: [
      {
        path: "calculator",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <Calculator />
          </Flex>
        ),
      },
      {
        path: "rock-paper-scissor",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <RockPaperScissor />
          </Flex>
        ),
      },
      {
        path: "stopwatch",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <Stopwatch />
          </Flex>
        ),
      },
      {
        path: "password-generator",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <PasswordGenerator />
          </Flex>
        ),
      },
      {
        path: "tic-tac-toe",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <TicTacToe />
          </Flex>
        ),
      },
      {
        path: "note-app",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <NoteApp />
          </Flex>
        ),
      },
      {
        path: "weather-app",
        element: (
          <Flex h="100vh" w="100vw" justifyContent="center">
            <WeatherApp />
          </Flex>
        ),
      },
      {
        path: "landing-pages",
        element: <Outlet />,
        children: [
          {
            path: "vr-landing-page",
            element: <VRPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
