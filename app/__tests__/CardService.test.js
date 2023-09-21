import { render, screen, fireEvent } from "@testing-library/react";
import CardService from "../components/services/CardService";

test("should find a button", () => {
  const button = document.createElement("button");
  expect(button).not.toBeNull();
});

test("renders ExampleComponent correctly", () => {
  render(<CardService />);
  expect(screen.getByText("Saber mais")).toBeInTheDocument();
});
