// // import NavBar from "../components/navbar/NavBar";
// // import React from "react";
// // import { render, fireEvent, screen } from "@testing-library/react";

// // jest.mock("react-router");

// // describe("NavBar", () => {
// //   test("should render correnctly", () => {
// //     render(<NavBar />);
// //     screen.getByText("Sobre mim");
// //     screen.getByText("Contactos");
// //   });
// // });

// import React from "react";
// import { render } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom"; // MemoryRouter provides a mock router for testing
// import Navbar from "../components/navbar/NavBar";

// test("Navbar renders correctly with links", () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <Navbar />
//     </MemoryRouter>
//   );

//   // Check if the Navbar component renders with the expected links
//   const homeLink = getByText("Home");
//   const aboutLink = getByText("About");
//   const contactLink = getByText("Contact");

//   expect(homeLink).toBeInTheDocument();
//   expect(aboutLink).toBeInTheDocument();
//   expect(contactLink).toBeInTheDocument();

//   // Optionally, you can check if the links point to the correct routes
//   expect(homeLink).toHaveAttribute("href", "/");
//   expect(aboutLink).toHaveAttribute("href", "/about");
//   expect(contactLink).toHaveAttribute("href", "/contact");
// });

// export default {};
