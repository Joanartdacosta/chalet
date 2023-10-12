import ProjectGallery from "../components/projects/gallery/ProjectsGallery";
import React from "react";
import { getByTitle, render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("NavBar", () => {
  test("should render correnctly", () => {
    render(<ProjectGallery />);

    screen.getByTitle("Home Staging");

    const homeStagingId = document.querySelector("#staging");
    getByTitle(homeStagingId, "Home Staging");
  });
});
