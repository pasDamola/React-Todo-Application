import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo", () => {
  it("adds a todo to the list", () => {
    render(<Todo />);

    const input = screen.getByTestId("todo-input");
    userEvent.type(input, "buy some milk");
    userEvent.type(input, "{enter}");

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });
});
