import ProjectGallery from "../components/projects/gallery/ProjectsGallery";
import React from "react";
import { render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("NavBar", () => {
  test("should render correnctly", () => {
    render(<ProjectGallery />);
    screen.getById("staging");
    screen.getByText("Home Staging");
  });
});
