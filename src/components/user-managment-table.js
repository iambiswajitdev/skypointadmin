import { Table } from "react-bootstrap";
import TableScrollbar from "react-table-scrollbar";

import { viewUserTableData } from "../utility/commonStaticData";

const UserManagmentTable = () => {
  return (
    <div className="dashbord_transition_table">
      <TableScrollbar rows={5}>
        <Table striped hover bordered className="dashbord_table">
          <thead className="table_head_bg_color">
            <tr>
              <th>Serial.</th>
              <th> Name</th>
              <th>Mobile No.</th>
              <th>Status</th>
              <th>Action</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Address</th>
              <th>Balance</th>
              <th>Pan Balance</th>
              <th>Lock Amount</th>
              <th>Upline Id</th>
              <th>Domain Name</th>
              <th>WLID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Recharge</th>
              <th>DMR</th>
              <th>Elctricity</th>
              <th>Pan</th>
              <th>AEPS</th>
              <th>Insurance</th>
            </tr>
          </thead>
          <tbody>
            {viewUserTableData.map((item, index) => (
              <tr key={index}>
                <td>{item.serial}</td>
                <td>{item.Name}</td>
                <td>{item.Mobile_No}</td>
                <td>{item.status}</td>
                <td className="user_action">
                  {item.action.map((actionItems, index) => (
                    <span key={index} className="user_icon">
                      {actionItems}
                    </span>
                  ))}
                </td>
                <td>{item.Email}</td>
                <td>{item.User_Type}</td>
                <td>{item.Address}</td>
                <td>{item.Balance}</td>
                <td>{item.Pan_Balance}</td>
                <td>{item.Lock_Amount}</td>
                <td>{item.Upline_Id}</td>
                <td>{item.Domain_Name}</td>
                <td>{item.WLID}</td>
                <td>{item.Date}</td>
                <td>{item.Time}</td>
                <td>{item.Recharge}</td>
                <td className="user_services_diactive">{item.DMR}</td>
                <td>{item.Elctricity}</td>
                <td className="user_services_active">{item.Pan}</td>
                <td>{item.AEPS}</td>
                <td>{item.Insurance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableScrollbar>
    </div>
  );
};

export default UserManagmentTable;
