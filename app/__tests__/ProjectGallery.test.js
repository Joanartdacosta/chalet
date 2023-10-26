import ProjectGallery from "../components/projects/gallery/ProjectsGallery";
import React from "react";
import { getByText, render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("ProjectGallery", () => {
  test("should render correnctly", () => {
    render(<ProjectGallery />);

    screen.getByText("Home Staging");

    const text = document.querySelector("staging");
    getByText(text, "Home Staging");
  });
});
