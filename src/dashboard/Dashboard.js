import React, { useEffect, useState } from "react";
import NavBars from "../comp/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Container, Nav, Row } from "react-bootstrap";
import img from "../img/1.jpg";
import img1 from "../img/2.jpg";
import img2 from "../img/3.jpg";
import img3 from "../img/4.jpg";
import DashboardLayouts from "../comp/Layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      {!sessionStorage.getItem("user") ? (
        <>
          {" "}
          <h1
            style={{
              textAlign: "center",
              color: "red",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            Sorry you login time has out Please login again{" "}
            <NavLink to="/"> Login</NavLink>
          </h1>
        </>
      ) : (
        <>
          <DashboardLayouts>
            <Container fluid>
              <Row className="bg-dark">
                <Col>
                  {" "}
                  <div className="text">
                    <h1>Libraries</h1>
                    Explore any of our 9 branches to access free wifi and
                    computers or to browse and borrow from the collection.
                    Library membership is free if you live in NSW.
                  </div>
                </Col>
                <Col className="img-bar"></Col>
              </Row>
            </Container>

            <Container>
              <div>
                <h1 className="mt-5">Library Branches</h1>
                <Row className="mt-5">
                  <Col className="d-flex">
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img}
                      alt=""
                      height={150}
                      width={150}
                    />

                    <div className="mx-5">
                      LIBRIES <p></p>
                      <h3>Customs House Liabrary</h3>
                      <p></p>
                      Circulary Quay
                    </div>
                  </Col>

                  <Col className="d-flex">
                    {" "}
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img3}
                      alt=""
                      height={150}
                      width={150}
                    />
                    <div className="mx-5">
                      LIBRIES <p></p>
                      <h3>Darling Square Liabrary</h3>
                      <p></p>
                      Haymarket
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="d-flex">
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img1}
                      alt=""
                      height={150}
                      width={150}
                    />

                    <div className="mx-5">
                      LIBRIES <p></p>
                      <h3>Glebe Library House Liabrary</h3>
                      <p></p>
                      Glebe
                    </div>
                  </Col>

                  <Col className="d-flex">
                    {" "}
                    <img
                      style={{ borderRadius: "50%" }}
                      src={img2}
                      alt=""
                      height={150}
                      width={150}
                    />
                    <div className="mx-5">
                      LIBRIES <p></p>
                      <h3>Green Square Liabrary</h3>
                      <p></p>
                      Green Square
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>

            <Container fluid>
              <Row className="img-bar1  mt-5" style={{ height: "80vh" }}>
                <Col></Col>
                <Col className=" col-5  text1">
                  {" "}
                  <div className="mx-5">
                    <h1>
                      Event and <p>workshops</p>
                    </h1>
                    <h4>
                      Join a workshop, talk or class at our vranches or online.
                      you can also keep the kids entertrained with our popular
                      rhymetime and storytime video availavle to wathc at hone
                      anytime.
                    </h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </DashboardLayouts>
        </>
      )}
    </div>
  );
};

export default Dashboard;
