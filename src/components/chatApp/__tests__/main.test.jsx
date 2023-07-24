import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "../main";

// Learn using these 2 articles, also make notes and mindmaps for these
// https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/
// https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/

test("ChatApp : Main page renders successfully.", () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
  const element = screen.getByTestId("ca-main");
  expect(element).toBeInTheDocument();
});
