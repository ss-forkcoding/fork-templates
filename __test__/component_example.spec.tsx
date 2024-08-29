import { expect, it, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MouseEventHandler } from "react";

const handleClickMockup = vi.fn(() => {
  console.log("clicked");
});

const Target = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <div>
      <h1>Test Example</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

describe("Component test example", () => {
  render(<Target onClick={handleClickMockup} />);
  it("should render", () => {
    expect(screen.getByText("Test Example")).toBeDefined();
    expect(screen.getByText("Click")).toBeDefined();
  });

  it("should click", () => {
    screen.getByText("Click").click();
    expect(handleClickMockup).toHaveBeenCalledOnce();
  });
});

// React component test should test their interaction within real end user
