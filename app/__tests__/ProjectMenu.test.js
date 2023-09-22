import ProjectMenu from "../components/projects/ProjectMenu";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
jest.mock("react-router");

describe("NavBar", () => {
  test("should render correnctly", () => {
    render(<ProjectMenu />);
    screen.getByText("Consultoria Online");
    screen.getByText("Home Staging");
  });
});
