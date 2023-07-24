import { render, screen } from "@testing-library/react";
import InputFile from "../inputFile";

test("ChatApp : inputFile renders successfully.", () => {
  render(
    <InputFile
      label="test_input_file"
      onChange={() => {
        return;
      }}
      name="test_input_file"
      value=""
    />
  );

  const element = screen.getByText(/test_input_file/i);

  expect(element).toBeInTheDocument();
});
