import React, { useState } from "react";
import Layouts from "../Layouts/Layouts";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InpurForm from "./InpurForm";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../healper/axios";
import { toast } from "react-toastify";

export const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [fom, strfom] = useState(initialState);
  const navigate = useNavigate();

  console.log(fom);

  const obj = [
    {
      lable: "Email",
      name: "email",
      type: "email",
      placeholder: "sam@gmail.com",
      value: fom.email,
      required: true,
    },
    {
      lable: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      value: fom.password,
      required: true,
    },
  ];

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    strfom({ ...fom, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message, user } = await loginUser(fom);
    console.log(status);
    strfom(initialState);

    if (status === "success") {
      toast[status](message);
      navigate("/dashboard");
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      toast[status](message);
    }
  };

  return (
    <Layouts>
      <Container fluid>
        <h1 className=" p-4 text-center">
          {" "}
          Welcome to Library Managment System
        </h1>

        <Row className="bg-dark">
          <Col className="col-lg-6 col-md-12 info-1 d-none d-md-flex">
            {" "}
            <div>
              <h1 className="text-center p-5 text-white">
                {" "}
                Login to our Management Library System
              </h1>
              <p>
                <h4 className="text-center ">- View And Borrow -</h4>
              </p>
            </div>
          </Col>
          <Col>
            <div className="text-white ">
              <h3 className="text-center p-3 ">Login Now</h3> <Form></Form>
              <hr />
              <Form className="m-5" onSubmit={handelOnSubmit}>
                {obj.map((input, i) => (
                  <InpurForm key={i} {...input} onChange={handelOnChange} />
                ))}

                <div>
                  <Button className="m-1 mt-3" variant="light" type="submit">
                    Login
                  </Button>
                </div>
                <div className="text-center mt-2">
                  Doesn't have an account?{" "}
                  <Link to="/regrestration">Regrestration</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layouts>
  );
};
