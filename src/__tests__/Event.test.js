import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";
import React from "react";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event name", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders start events time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders events details button with the title (Show Details)", () => {
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test('show details after user clicks button "show details"', async () => {
    const button = EventComponent.queryByText("Show Details");
    await userEvent.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the hide details button", () => {
    const button = EventComponent.queryByText("Hide Details");
    userEvent.click(button);

    const eventDOM = EventComponent.container.firstChild;
    const details = eventDOM.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});
