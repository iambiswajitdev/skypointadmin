import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["AEPS", "DMT", "Aadhaar Pay", "Balance Enquiry"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["#F50057", "#DFD221", "#2FE229", "#FF8A65"],
      borderColor: ["#9B0338", "#7C750E", "#0F740C", "#7E3925"],
      borderWidth: 1,
    },
  ],
};

const DashboardRightSideRoundChart = () => {
  return (
    <>
      <h5 className="dashbord_chart_hadding">Monthly Data</h5>
      <Doughnut data={data} />
    </>
  );
};

export default DashboardRightSideRoundChart;
