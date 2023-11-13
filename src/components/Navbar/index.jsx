import React from "react";
import "./style.css";
import { Container, Nav, Navbar, Row, Col, Offcanvas } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar key="md" expand="md" className="navigation-bar">
              <Col md={6} sm={8} className="navbar-left">
                <Navbar.Brand href="#home">
                  <div className="navbar-logo"></div>
                </Navbar.Brand>
              </Col>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
              <Navbar.Offcanvas
                id="offcanvasNavbar-expand-md"
                aria-labelledby="offcanvasNavbar-expand-md"
                placement="end"
                style={{ width: "50%" }}
              >
                <Offcanvas.Header closeButton>
                  <p>BCR</p>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Col md={6} sm={3} className="navbar-right">
                    <Nav className="navbar-item ">
                      <Nav.Link href="#home">
                        <a>Our Services</a>
                      </Nav.Link>
                      <Nav.Link href="#home">
                        <a>Why Us</a>
                      </Nav.Link>
                      <Nav.Link href="#home">
                        <a>Testimonial</a>
                      </Nav.Link>
                      <Nav.Link href="#home">
                        <a>FAQ</a>
                      </Nav.Link>
                    </Nav>
                  </Col>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationBar;
