import { useState } from "react";
import HeaderNavUserIconDrawer from "./header-nav-user-icon-drawer";
import { drawerProfile } from "../utility/commonStaticData";

const HeaderNav = () => {
  const [drawerState, setDrawerState] = useState(false);

  const changeDrawerState = () => {
    setDrawerState(!drawerState);
  };

  return (
    <>
      <div className="headernav">
        <ul className="headernav_ul">
          <li className="headernav_li">
            <button className="btn_success" type="submit">
              Balance: 2500/-
            </button>
          </li>
          <li className="headernav_li">
            {
              //* change this button to a user icon
            }
            <img
              className="header_profile_icon"
              onClick={changeDrawerState}
              src={drawerProfile}
              alt=""
            />
          </li>
        </ul>
      </div>
      <HeaderNavUserIconDrawer
        drawerState={drawerState}
        changeDrawer={changeDrawerState}
      />
    </>
  );
};

export default HeaderNav;
