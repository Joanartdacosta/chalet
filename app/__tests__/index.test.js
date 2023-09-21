import "@testing-library/jest-dom";
import ChaletEntrance from "../pages/index";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

describe("Chalet App", () => {
  it("renders the chalet app", () => {
    render(<ChaletEntrance />);

    expect(screen.getByTestId("chalet-entrance")).toBeInTheDocument();
    expect(screen.getByTestId("mission")).toBeInTheDocument();
  });
});
