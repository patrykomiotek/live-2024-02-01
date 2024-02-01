import { render } from "@testing-library/react";
import { Input } from "./Input";
import { axe } from "jest-axe";

describe("Input component", () => {
  it("should have no violations", async () => {
    const { container } = render(<Input label="Name" />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
