import React from "react";
import { Col, Row } from "react-bootstrap";
import DashboardWeeklyBarChart from "../components/dashboard-weekly-bar-chart";
import DashboardBanner from "../components/dashboard-banner";
import DashboardRightSide from "../components/dashboard-right-side";
import DashboardTransitionTable from "../components/dashboard-transition-table";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="">
          <Row>
            <Col lg={8}>
              <Row>
                <Col lg={12}>
                  <DashboardBanner />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <DashboardWeeklyBarChart />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <DashboardTransitionTable />
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <DashboardRightSide />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
