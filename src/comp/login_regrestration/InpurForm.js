import React from "react";
import { Form } from "react-bootstrap";

const InpurForm = ({ lable, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label className="text-white m-1">{lable}</Form.Label>
      <Form.Control className="m-1" {...rest} />
    </Form.Group>
  );
};

export default InpurForm;
