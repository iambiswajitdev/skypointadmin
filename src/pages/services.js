import CommonCard from "../components/common-card";
import { Row } from "react-bootstrap";
import {
  fingerPrintIcon,
  dhistv,
  Eleactrick,
  pancard,
  ministatment,
  miniatm,
  adherpay,
  movetobank,
  impsexpres,
  bookatm,
  account,
  kyc,
  passport,
  insurenc,
  flight,
  gasbook,
  busbook,
  hotelbook,
  mobile,
} from "../utility/commonStaticData";
import React, { useState } from "react";
import CommonDialog from "../components/common-dialog";

const Services = () => {
  const [data, setData] = useState([
    // {
    //   name: "Mobile Recharge",
    //   icon: mobile,

    //   open: false,
    // },
    {
      name: "DTH Recharge",
      icon: dhistv,

      open: false,
    },
    {
      name: "Electricity Bill",
      icon: Eleactrick,

      open: false,
    },
    {
      name: "Pan Card Apply",
      icon: pancard,

      open: false,
    },
    { name: "AEPS", icon: fingerPrintIcon, open: false },
    {
      name: "Mini Statement",
      icon: ministatment,

      open: false,
    },
    { name: "Mini ATM", icon: miniatm, open: false },
    {
      name: "Aadhar Pay",
      icon: adherpay,

      open: false,
    },
    {
      name: "Move to Bank",
      icon: movetobank,

      open: false,
    },
    {
      name: "Express IMPS",
      icon: impsexpres,

      open: false,
    },
    {
      name: "Book Mini ATM",
      icon: bookatm,

      open: false,
    },
    {
      name: "Account Open",
      icon: account,

      open: false,
    },
    {
      name: "KYC",
      icon: kyc,

      open: false,
    },
    {
      name: "Passport Apply",
      icon: passport,

      open: false,
    },
    {
      name: "Insurance",
      icon: insurenc,

      open: false,
    },
    {
      name: "Gas Booking",
      icon: gasbook,

      open: false,
    },
    {
      name: "Flight Booking",
      icon: flight,

      open: false,
    },
    {
      name: "Bus Booking",
      icon: busbook,

      open: false,
    },
    {
      name: "Hotel Booking",
      icon: hotelbook,

      open: false,
    },
  ]);

  const [dialogState, setDialogState] = useState(false);
  const [currentDialogTitle, setCurrentDialogTitle] = useState("");

  const changeDialog = () => {
    setDialogState(!dialogState);
  };

  const serviceOnClick = (itemName) => {
    changeDialog();
    const newData = data.map((item) => {
      const dummyItem = item;
      if (item.name === itemName) {
        setCurrentDialogTitle(itemName);
      } else {
        item.open = false;
      }
      return dummyItem;
    });

    setData(newData);
  };

  return (
    <div>
      <Row>
        {data.map((item, index) => (
          <CommonCard
            key={index}
            name={item.name}
            icon={item.icon}
            serviceOnClick={serviceOnClick}
            isItemOn={item.open}
          />
        ))}
      </Row>

      <CommonDialog
        currentState={dialogState}
        changeStateFunction={changeDialog}
        headerTitle={currentDialogTitle}
      />
    </div>
  );
};

export default Services;
