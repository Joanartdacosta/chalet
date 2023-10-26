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

  expect(aboutLink).toHaveAttribute("href", "/about");
  expect(projectsLink).toHaveAttribute("href", "/projects");
  expect(contactsLink).toHaveAttribute("href", "/contacts");
  expect(servicesLink).toHaveAttribute("href", "/services");
});
