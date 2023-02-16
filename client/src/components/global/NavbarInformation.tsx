import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsCart2 } from "react-icons/bs";

export const NavbarInformation = () => {
  return (
    <nav id="global-navbar">
      <Navbar expand="lg">
        <Container className="nav-border">
          <Navbar.Brand href="#link" className="location">
            <span style={{ fontSize: "1.2rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
              <span style={{ fontSize: "0.8rem" }}>Enviar a</span>
            </span>
            <strong style={{ fontSize: "0.8rem" }}>Capital Federal</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <hr />
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#link">Vehículos</NavDropdown.Item>
                <NavDropdown.Item href="#link">Inmuebles</NavDropdown.Item>
                <NavDropdown.Item href="#link">Construcción</NavDropdown.Item>
                <NavDropdown.Item href="#link">
                  Juegos y Juguetes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Ofertas</Nav.Link>
              <Nav.Link href="#link">Historial</Nav.Link>
              <Nav.Link href="#link">Moda</Nav.Link>
              <Nav.Link href="#link">Vender</Nav.Link>
              <Nav.Link href="#link">Ayuda</Nav.Link>
            </Nav>
            <hr />
            <Nav className="me-auto">
              <Nav.Link href="#link">Creá tu cuenta</Nav.Link>
              <Nav.Link href="#link">Ingresá</Nav.Link>
              <Nav.Link href="#link">Mis Compras</Nav.Link>
              <Nav.Link href="#link">
                <BsCart2 />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};
