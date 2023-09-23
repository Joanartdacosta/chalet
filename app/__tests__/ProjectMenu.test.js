import ProjectMenu from "../components/projects/project_menu/ProjectMenu";
import React from "react";
import { render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("NavBar", () => {
  test("should render correnctly", () => {
    render(<ProjectMenu />);
    screen.getByText("Consultoria Online");
    screen.getByText("Home Staging");
  });
});
