import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Heading() {
  return (
    <div className="container">
      <h1>게시판글 등록하기</h1>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
        style={{ borderRadius: "10px" }}
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/upload">Upload</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Heading;
