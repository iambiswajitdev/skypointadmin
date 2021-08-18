import { Col, Row } from "react-bootstrap";
import UserManagmentTable from "../components/user-managment-table";
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
const UserManagment = () => {
  return (
    <div>
      <Row className="justify-content-center">
        {userType.map((userItems, index) => (
          <Col lg={2} key={index}>
            <div className="Dashboard_card user_box user_box_active">
              <div className="Dashboard_card_hover"></div>
              <span className="Dashboard_card_icon">{userItems.icon}</span>
              <h5 className="card_item">{userItems.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center">
        <Col lg={4}>
          <input
            className="inputfild_1st"
            placeholder="Search Item"
            type="text"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <UserManagmentTable />
        </Col>
      </Row>
    </div>
  );
};

export default UserManagment;
