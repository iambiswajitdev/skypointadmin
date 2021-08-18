import { Line } from "react-chartjs-2";
const data = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "All transactions",
      data: [
        5,
        3,
        7,
        2,
        9,
        12,
        19,
        3,
        8,
        2,
        22,
        10,
        16,
        33,
        57,
        23,
        38,
        76,
        58,
        29,
        34,
        19,
        30,
        69,
        49,
        30,
        25,
        27,
        33,
        42,
        56,
      ],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  elements: {
    line: {
      tension: 0.5, // disables bezier curves
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const DashboardLineChart = () => {
  return (
    <>
      <h5 className="dashbord_chart_hadding">Monthly growth data</h5>
      <Line data={data} options={options} />
    </>
  );
};

export default DashboardLineChart;
