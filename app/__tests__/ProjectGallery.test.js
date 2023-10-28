import ProjectsGallery from "../components/projects/gallery/ProjectsGallery";
import React from "react";
import { render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("ProjectsGallery", () => {
  test("should render correnctly", () => {
    render(<ProjectsGallery />);

    screen.getAllByText("Projeto de Design e Remodelação de Interiores");
  });
});
