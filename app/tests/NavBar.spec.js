import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../components/navbar/NavBar";
import React from "react";

jest.mock("react-router");

describe("NavBar", () => {
  test("should render correnctly", () => {
    render(<NavBar />);
    screen.getByText("Sobre mim");
    screen.getByText("Contactos");
  });
});

export default {};
