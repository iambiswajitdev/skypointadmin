import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <div className="footer">
        <Row>
          <Col lg={4}>
            <h4 className="footer_company_name">
              <span> skypoint india e services pvt. ltd </span>
              <span className="footer_ul">
                <li className="footer_li_company_details">
                  Email : infoskypoint@gmal.com
                </li>
                <li className="footer_li_company_details">
                  Pnone No. 72685926
                </li>
              </span>
              <ul className="footer_ul">
                <li className="footer_li_socel_media">
                  <i className="fab fa-facebook"></i>
                </li>
                <li className="footer_li_socel_media">
                  <i className="fab fa-instagram-square"></i>
                </li>
                <li className="footer_li_socel_media">
                  <i className="fab fa-whatsapp-square"></i>
                </li>
              </ul>
            </h4>
          </Col>
          <Col lg={4}>
            <ul className="footer_ul">
              <li className="footer_li">home</li>
              <li className="footer_li">services</li>
              <li className="footer_li">contect</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul className="footer_ul">
              <li className="footer_li">terms & conditions</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
