import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Base = ({ header, footer, children }) => {
  return (
    <div className="maindiv">
      {header && <Header />}
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
            <div className="base_children_content_section">{children}</div>
          </Col>
        </Row>
      </Container>
      {footer && <Footer />}
    </div>
  );
};

export default Base;
