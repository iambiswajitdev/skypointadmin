import { Col } from "react-bootstrap";

const CommonCard = ({ name, icon, serviceOnClick }) => {
  return (
    <Col lg={2}>
      <div className={"Dashboard_card"} onClick={() => serviceOnClick(name)}>
        <div className="Dashboard_card_hover"></div>
        <span className="Dashboard_card_icon">{icon}</span>
        <h4 className="card_item">{name}</h4>
      </div>
    </Col>
  );
};

export default CommonCard;
