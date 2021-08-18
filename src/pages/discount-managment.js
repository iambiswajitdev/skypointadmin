import { Col, Row } from "react-bootstrap";

import {
  userIcon,
  suparIcon,
  distIcon,
  retalerIcon,
  apiIcon,
} from "../utility/commonStaticData";

const userType = [
  { name: "CHANNEL PARTNER", icon: userIcon },
  { name: "SUPER DISTRIBUTOR", icon: suparIcon },
  { name: "DISTRIBUTOR", icon: distIcon },
  { name: "RETAILER", icon: retalerIcon },
  { name: "API USER", icon: apiIcon },
];

const DiscountManagment = () => {
  return (
    <>
      <div className="discount_managment">
        <Row>
          {userType.map((userItems, index) => (
            <Col lg={2} key={index}>
              <div className="Dashboard_card user_box">
                <div className="Dashboard_card_hover"></div>
                <span className="Dashboard_card_icon">
                  {/* <i class="fas fa-user-circle"></i> */}
                  {userItems.icon}
                </span>
                <h5 className="card_item">{userItems.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={7}>
            {/* <div className="form_section">
              <form>
                <input
                  type="text"
                  className="inputfild_1st"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="inputfild_1st"
                  placeholder="Enter Your Email"
                />
                <input
                  type="Number"
                  className="inputfild_1st"
                  placeholder="Enter Your Number"
                />
                <select className="inputfild_1st select_from">
                  <option>Select Option</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
                <textarea
                  rows="5"
                  cols="10"
                  className="inputfild_1st"
                  placeholder="Massage . . ."
                ></textarea>
                <button class="btn_outline_success" type="submit">
                  success
                </button>
              </form>
            </div> */}
          </Col>
          <Col lg={5}></Col>
        </Row>
      </div>
    </>
  );
};

export default DiscountManagment;
