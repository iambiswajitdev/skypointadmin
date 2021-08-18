import { Col, Container, Row } from "react-bootstrap";
import { logoImages } from "../utility/commonStaticData";
const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <Container>
        <Row>
          <Col lg={2}>
            <img className="logoimg" src={logoImages} alt="" />
          </Col>
          <Col lg={8}>
            <h2 className="page_not_title">page not found !</h2>
          </Col>
          <Col lg={2}>
            <button className="btn_outline_primary pagenot_manu_btn">
              Back to Home
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageNotFound;
