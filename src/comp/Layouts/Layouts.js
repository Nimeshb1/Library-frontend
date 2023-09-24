import React from "react";
import { Container } from "react-bootstrap";
import Footers from "../Footers";
import Headers from "../Headers";

const Layouts = ({ children }) => {
  return (
    <div>
      <Headers />
      <Container fluid className="main">
        {children}
      </Container>
      <Footers />
    </div>
  );
};

export default Layouts;
