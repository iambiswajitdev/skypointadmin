import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  console.log(location.pathname);

  const manuItem = [
    { name: "Dashboard", route: "/" },
    { name: "Services", route: "/services" },
    { name: "Discount Management", route: "/discount-managment" },
    { name: "User Management", route: "/user-managment" },
    { name: "Manager", route: "/manager" },
    { name: "A/C Manegment", route: "/acount-managment" },
    { name: "Api Managment", route: "/api-managment" },
    { name: "Upi ID", route: "/upi-id" },
    { name: "Reports", route: "/reports" },
  ];

  return (
    <>
      <div className="sidebar_section">
        <ul className="sidebar_ul">
          {manuItem.map((item, index) => (
            <li
              key={index}
              className={
                item.route === location.pathname
                  ? "manuitems active_manuitems"
                  : "manuitems"
              }
            >
              <span className="active_manuitems_after_before_span"></span>
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
