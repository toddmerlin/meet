import React from "react";
import { render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("contains an element with role of textbox", () => {
    const { container } = render(<NumberOfEvents setCurrentNOE={() => {}} />); // Render the NumberOfEvents component
    const textBox = container.querySelector(
      '[data-testid="numberOfEventsInput"]'
    );

    expect(textBox).toBeInTheDocument(); // Assert that the element is in the document
  });

  test("default value of input field is 32", () => {
    const { getByTestId } = render(<NumberOfEvents setCurrentNOE={() => {}} />);
    const inputElement = getByTestId("numberOfEventsInput");

    expect(inputElement).toHaveValue("32");
  });

  test("value of textbox changes when user types", async () => {
    const { getByTestId } = render(<NumberOfEvents setCurrentNOE={() => {}} />);
    const inputElement = getByTestId("numberOfEventsInput");

    await userEvent.type(inputElement, "{backspace}{backspace}10");

    expect(inputElement).toHaveValue("10");
  });
});
