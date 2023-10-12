import ProjectGallery from "../components/projects/gallery/ProjectsGallery";
import React from "react";
import { getByText, render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("ProjectGallery", () => {
  test("should render correnctly", () => {
    render(<ProjectGallery />);

    screen.getByText("Consultoria Complementar");

    const textId = document.querySelector("#complementar");
    getByText(textId, "Consultoria Complementar");
  });
});
