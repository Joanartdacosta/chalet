import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

describe("Chalet App", () => {
  it("renders the chalet app", () => {
    render(<Home />);

    expect(screen.getByTestId("chalet-entrance")).toBeInTheDocument();
    expect(screen.getByTestId("mission")).toBeInTheDocument();
  });
});
