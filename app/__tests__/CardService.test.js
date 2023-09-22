import { render, screen, fireEvent } from "@testing-library/react";
import CardService from "../components/services/CardService";

test("renders ExampleComponent correctly", () => {
  render(<CardService />);
  expect(screen.getByText("Saber mais")).toBeInTheDocument();
});
