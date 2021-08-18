import React from "react";
import { aepsBanner } from "../utility/commonStaticData";

const DashboardBanner = () => {
  return (
    <div>
      <img
        className="dashboard_banner"
        src={aepsBanner}
        alt="dashboradBanner"
      />
      <span className="banner_text">Welcome our new dashboard </span>
    </div>
  );
};

export default DashboardBanner;
