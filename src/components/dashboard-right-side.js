import React from "react";
import DashboardLineChart from "./dashboard-line-chart";
import DashboardRightSideRoundChart from "./dashboard-right-side-round-chart";

const DashboardRightSide = () => {
  return (
    <div>
      <div className="dashboard_right_site_top"></div>
      <div className="dashboard_line_chart">
        <DashboardLineChart />
      </div>
      <div className="dashboard_round_chart">
        <DashboardRightSideRoundChart />
      </div>
    </div>
  );
};

export default DashboardRightSide;
