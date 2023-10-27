import ProjectGallery from "../components/projects/gallery/ProjectsGallery";
import React from "react";
import { render, screen } from "@testing-library/react";
jest.mock("react-router");

describe("ProjectGallery", () => {
  test("should render correnctly", () => {
    render(<ProjectGallery />);

    screen.getByText("Projeto de Design e Remodelação de Interiores");
  });
});
