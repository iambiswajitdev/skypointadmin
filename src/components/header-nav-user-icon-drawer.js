import Drawer from "@material-ui/core/Drawer";
import { Col, Row } from "react-bootstrap";
import { drawerProfile, drawerbottom } from "../utility/commonStaticData";

const HeaderNavUserIconDrawer = ({ drawerState, changeDrawer }) => {
  const profileBalance = [
    { lable: "main balance", amount: "265585" },
    { lable: "AEPS balance", amount: "54555" },
    { lable: "pan balance", amount: "92356" },
    { lable: "reacharg balance", amount: "1025" },
  ];
  return (
    <Drawer anchor="right" open={drawerState} onClose={changeDrawer}>
      {
        // *put all design here
      }
      <div className="profile_drawer">
        <Row>
          <Col lg={4}>
            <img className="profile_drawer_img" src={drawerProfile} alt="" />
          </Col>
          <Col lg={8}>
            <h5 className="profile_user_name">skypoint india</h5>
            <p className="profile_mail">info@skypoint.com</p>
            <p className="profile_mail">7852265232</p>
          </Col>
        </Row>
        <Row className="profile_status_item">
          <Col lg={6}>
            <h5 className="profile_user_name">
              <i class="fas fa-user-tie"></i> Profile
            </h5>
          </Col>
          <Col lg={6}>
            <h5 className="profile_user_name">
              <i class="fas fa-sign-out-alt"></i>
              Logout
            </h5>
          </Col>
        </Row>
        <Row>
          {profileBalance.map((item, index) => (
            <Col lg={6} key={index}>
              <div className="profile_drawer_img balance_box">
                <h5 className="profile_user_name">{item.lable}</h5>
                <div className="profile_balanc">{item.amount}</div>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={12}>
            <Row>
              <img className="profile_bottom_img" src={drawerbottom} alt="" />
            </Row>
          </Col>
        </Row>
      </div>
    </Drawer>
  );
};

export default HeaderNavUserIconDrawer;
