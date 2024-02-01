import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import { Button } from "./Button";

describe("Button component", () => {
  // TODO: do not write tests like below
  it("should renders correctly", () => {
    const { debug, rerender, unmount } = render(<Button label="Click me" />);
    const button = screen.getByText("Click me");

    fireEvent.click(button);

    // rerender();

    // debug();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  it("should have no violations", async () => {
    const { container } = render(<Button label="Click me" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
  it.todo("should implement this in the future");
  it.skip("should take props...", () => {});
  // it.only("should take only me", () => {});
});
