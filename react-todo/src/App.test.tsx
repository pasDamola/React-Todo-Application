import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo Application/i);
  expect(linkElement).toBeInTheDocument();

  const buttonElement = screen.getByRole("button", { name: "Hello There" });
  expect(buttonElement).toBeInTheDocument();
});
