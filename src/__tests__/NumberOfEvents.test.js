import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("contains an element with role of textbox", () => {
    const textBox = NumberOfEventsComponent.container.querySelector(
      '[data-testid="numberOfEventsInput"]'
    );
    expect(textBox).toBeInTheDocument();
  });

  test("default value of input field is 32", () => {
    const inputElement = NumberOfEventsComponent.getByTestId(
      "numberOfEventsInput"
    );
    expect(inputElement).toHaveValue("32");
  });

  test("value of textbox changes when user types", async () => {
    const inputElement = NumberOfEventsComponent.getByTestId(
      "numberOfEventsInput"
    );
    await userEvent.type(inputElement, "{backspace}{backspace}10");
    expect(inputElement).toHaveValue("10");
  });
});
