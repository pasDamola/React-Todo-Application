import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo", () => {
  it("adds a todo to the list", () => {
    render(<Todo />);
    const input = screen.getByTestId("todo-input");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(input, "buy some milk");
      userEvent.type(input, "{enter}");
    });

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });

  it("toggles active and done of an item", () => {
    render(<Todo />);

    const item = screen.getByText("buy car");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(item);
    });

    expect(item).toHaveStyle(`text-decoration: line-through`);
  });
});
