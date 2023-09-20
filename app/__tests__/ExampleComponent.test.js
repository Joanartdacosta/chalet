import { render, screen } from "@testing-library/react";
import ExampleComponent from "./../components/ExampleComponent";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

test("renders ExampleComponent correctly", () => {
  render(<ExampleComponent />);
  expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
});
