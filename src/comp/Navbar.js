import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBars() {
  const navigate = useNavigate();
  const [users, strUsers] = useState({});

  useEffect(() => {
    const use = JSON.parse(sessionStorage.getItem("user"));
    strUsers(use);
  }, []);

  const handleOnClick = (e) => {
    sessionStorage.removeItem("user");
  };

  return (
    <>
      {!users?._id ? (
        <>
          <Navbar bg="light" expand="md">
            <Container fluid>
              <Navbar.Brand href="#home">
                Library Management System
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink to="/" className="mx-4">
                    Login
                  </NavLink>
                  <NavLink to="/regrestration">Regrestration</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Nav>
                  <h3 className="d-none d-lg-flex">
                    {" "}
                    Hi {users?.fname} {users?.lname}, Welcome Back to Liabrary
                    Management System{" "}
                  </h3>
                  <h3 className="d-lg-none  ">
                    {" "}
                    Hi {users?.fname} {users?.lname}, Welcome Back{" "}
                  </h3>
                </Nav>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Manu Bar
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body
                    style={{ background: "black", color: "white" }}
                  >
                    <Nav>
                      <img
                        style={{
                          borderRadius: "90%",
                          height: "100px",
                          width: "100px",
                          border: "1px solid white",
                          marginLeft: "8rem",
                          marginTop: "1rem",
                        }}
                        src="data:image/png;base64,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"
                      />
                      <p></p>
                      <hr />
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3 mt-5 mx-4">
                      <Offcanvas.Header className="p-0 mx-0">
                        <h5 style={{ textDecoration: "underline" }}>
                          Dashboard
                        </h5>
                      </Offcanvas.Header>
                      <Nav
                        className=" mx-5 "
                        style={{ textDecoration: "none" }}
                      >
                        <NavLink
                          style={{ textDecoration: "none", color: "white" }}
                          to="/dashboard"
                          className="slideshow"
                        >
                          Dashboard
                        </NavLink>
                      </Nav>
                      <Offcanvas.Header className="p-0 mx-0">
                        <h5 style={{ textDecoration: "underline" }}>Main</h5>
                      </Offcanvas.Header>
                      <Nav
                        className=" mx-5 "
                        style={{ textDecoration: "none" }}
                      >
                        <NavLink
                          style={{ textDecoration: "none", color: "white" }}
                          to="/allbooks"
                          className="slideshow"
                        >
                          All Books
                        </NavLink>
                        <NavLink
                          style={{ textDecoration: "none", color: "white" }}
                          to="/mybooks"
                          className="slideshow"
                        >
                          My Books
                        </NavLink>
                        {users.role === "teacher" && (
                          <>
                            {" "}
                            <NavLink
                              style={{ textDecoration: "none", color: "white" }}
                              to="/addbooks"
                              className="slideshow"
                            >
                              Add Books
                            </NavLink>
                            <NavLink
                              style={{ textDecoration: "none", color: "white" }}
                              to="/transactions"
                              className="slideshow"
                            >
                              Tranasctions
                            </NavLink>
                          </>
                        )}
                      </Nav>
                    </Nav>
                    <Nav className="justify-content-end flex-grow-1 pe-3 mt-5 mx-4">
                      <Offcanvas.Header className="p-0 mx-0">
                        <h5 style={{ textDecoration: "underline" }}>User</h5>
                      </Offcanvas.Header>
                      <Nav className=" mx-5">
                        <NavLink
                          style={{ textDecoration: "none", color: "white" }}
                          href="#action1"
                          className="slideshow"
                        >
                          Profile
                        </NavLink>
                      </Nav>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <NavLink className="mx-1" to="/" onClick={handleOnClick}>
                  LogOut
                </NavLink>
              </Container>
            </Navbar>
          ))}
        </>
      )}
    </>
  );
}

export default NavBars;
