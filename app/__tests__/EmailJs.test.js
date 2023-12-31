import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import EmailJs from "../components/contacts/Email";

test("Contacts renders correctly with a form", () => {
  const { getByText } = render(
    <MemoryRouter>
      <EmailJs />
    </MemoryRouter>
  );

  expect(screen.getByText("Mensagem de contacto")).toBeInTheDocument();
});
