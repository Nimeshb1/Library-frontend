import React from "react";
import { Container } from "react-bootstrap";

import NavBars from "../Navbar";
import DashFooter from "../../dashboard/DashFooter";

const DashboardLayouts = ({ children }) => {
  return (
    <div>
      <NavBars />

      {children}

      <DashFooter />
    </div>
  );
};

export default DashboardLayouts;
