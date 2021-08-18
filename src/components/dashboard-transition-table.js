import { Table } from "react-bootstrap";
import TableScrollbar from "react-table-scrollbar";

const DashboardTransitionTable = () => {
  const tableProperty = [
    {
      seralNumber: 1,
      firstName: "biswajit",
      lastName: "mondal",
      userName: "mrbiswajit",
    },
    {
      seralNumber: 2,
      firstName: "ram",
      lastName: "das",
      userName: "rdas",
    },
    {
      seralNumber: 3,
      firstName: "sam",
      lastName: "sarkar",
      userName: "samsarker",
    },
    {
      seralNumber: 4,
      firstName: "arpan",
      lastName: "roy",
      userName: "arroy",
    },
    {
      seralNumber: 5,
      firstName: "inzee",
      lastName: "hok",
      userName: "hokinzze",
    },
    {
      seralNumber: 6,
      firstName: "suraj",
      lastName: "das",
      userName: "mrsdas",
    },
  ];
  return (
    <div className="dashbord_transition_table">
      <TableScrollbar rows={3}>
        <Table striped hover variant="" className="dashbord_table">
          <thead className="table_head_bg_color">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {tableProperty.map((item, index) => (
              <tr key={index}>
                <td>{item.seralNumber}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableScrollbar>
    </div>
  );
};

export default DashboardTransitionTable;
