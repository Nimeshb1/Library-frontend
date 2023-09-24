import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const DashFooter = () => {
  return (
    <>
      <div className="footer-1 mb-1">
        <Container>
          <Row>
            <Col>
              <ul className="ul mt-lg-5">
                <li>Service</li>
                <li>Planning for the future</li>
                <li> Space for us and hire</li>
                <li>Contact Us</li>
                <li>About</li>
              </ul>
            </Col>
            <Col>
              {" "}
              <ul className="ul-1 mt-lg-5">
                <li>News</li>
                <li>Event for the future</li>
                <li> Meetings for us and hire</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col>
              <div className="mt-5 text-white mt-lg-5">
                Get The Latest News
                <p></p>
                <Button
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                  }}
                >
                  Subscribe by Email
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="lastfooter">
        <Container>
          <ul>
            <li>Access to Infromation</li>
            <li> Privacy</li>
            <li>Terms & condition</li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default DashFooter;
