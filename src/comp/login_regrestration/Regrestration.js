import React, { useState } from "react";
import Layouts from "../Layouts/Layouts";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InpurForm from "./InpurForm";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { regrestration } from "../../healper/axios";

export const Regrestration = () => {
  const obj = [
    {
      lable: "First Name",
      name: "fname",
      type: "text",
      placeholder: "sam",
      required: true,
    },
    {
      lable: "Last Name",
      name: "lname",
      type: "text",
      placeholder: "shre",
      required: true,
    },
    {
      lable: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@gmail.com",
      required: true,
    },
    {
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    },
    {
      lable: "Re-Password",
      name: "repassword",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];

  const [fom, strfom] = useState({});
  const navigate = useNavigate();

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    strfom({ ...fom, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    const { repassword, ...rest } = fom;

    if (repassword !== rest.password) {
      return toast.error("password does not match");
    }

    const { status, message } = await regrestration(rest);

    toast[status](message);

    status = "success" && navigate("/");
  };

  console.log(fom);
  return (
    <Layouts>
      <Container fluid>
        <h1 className=" p-4 text-center">
          {" "}
          Welcome to Library Managment System
        </h1>

        <Row className="bg-dark">
          <Col className="col-lg-6 col-md-12 info d-none d-md-flex">
            {" "}
            <div>
              <h1 className="text-center p-5 text-white">
                {" "}
                Register to gain access to our Management Library System
              </h1>
              <p>
                <h4 className="text-center ">- View And Borrow -</h4>
              </p>
            </div>
          </Col>
          <Col>
            <div className="text-white ">
              <h3 className="text-center p-3 ">Register Now</h3> <Form></Form>
              <hr />
              <Form className="m-5" onSubmit={handelOnSubmit}>
                {obj.map((input, i) => (
                  <InpurForm key={i} {...input} onChange={handelOnChange} />
                ))}

                <Form.Group>
                  <Form.Select
                    className=" m-1 mt-3  w-100 col-12 col-lg-3 "
                    name="role"
                    required
                    onChange={handelOnChange}
                  >
                    <option value="">---Select roles---</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">student</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    className="mt-3 m-1"
                    type="checkbox"
                    label="I agree the T&Cs"
                    required
                  />
                </Form.Group>

                <div>
                  <Button className="m-1 mt-3" variant="light" type="submit">
                    Register
                  </Button>
                </div>
                <div className="text-center mt-2">
                  Already have an account? <Link to="/">Login</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layouts>
  );
};
