import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  datasets: [
    {
      label: "AEPS",
      data: [12, 19, 3, 5, 2, 3, 4],
      backgroundColor: "#F50057",
    },
    {
      label: "DMT",
      data: [2, 3, 20, 5, 1, 4, 9],
      backgroundColor: "#DFD221",
    },
    {
      label: "Aadhaar Pay",
      data: [3, 10, 13, 15, 22, 30, 3],
      backgroundColor: "#2FE229",
    },
    {
      label: "Balance Enquiry",
      data: [14, 6, 7, 18, 13, 22, 5],
      backgroundColor: "#FF8A65",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks: {
          display: false, //this will remove only the label
        },
      },
    ],
  },
};

const DashboardWeeklyBarChart = () => {
  return (
    <>
      <h5 className="dashbord_chart_hadding">Weekly data chart </h5>
      <Bar data={data} options={options} />
    </>
  );
};

export default DashboardWeeklyBarChart;
