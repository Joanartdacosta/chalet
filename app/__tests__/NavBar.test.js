import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";

test("Navbar renders correctly with links", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const aboutLink = getByText("SOBRE MIM");
  const projectsLink = getByText("PROJETOS");
  const contactsLink = getByText("CONTACTOS");
  const servicesLink = getByText("SERVICOS");

  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactsLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();

  expect(aboutLink).toHaveAttribute("href", "/sobre");
  expect(projectsLink).toHaveAttribute("href", "/projetos");
  expect(contactsLink).toHaveAttribute("href", "/contactos");
  expect(servicesLink).toHaveAttribute("href", "/servicos");
});
