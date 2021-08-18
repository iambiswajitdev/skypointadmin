import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import HeaderNav from "./header-nav";
import HeaderLogo from "./headerLogo";
const Header = () => {
  return (
    <>
      <div className="header_section">
        <Container fluid>
          <Row>
            <Col lg={2}>
              <HeaderLogo />
            </Col>
            <Col lg={10}>
              <HeaderNav />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
