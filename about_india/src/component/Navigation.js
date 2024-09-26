import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        bg="dark"
        
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/highlightes">Highlightes about India</Nav.Link>
              <Nav.Link href="/topcourses">Top courses to study</Nav.Link>
              <Nav.Link href="/careerinindia">Career Scope</Nav.Link>
              <Nav.Link href="/abroadvsindia">
                Study India vs Study Abroad
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navigation;

