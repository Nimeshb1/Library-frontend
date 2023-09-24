import React, { useEffect, useState } from "react";
import DashboardLayouts from "../comp/Layouts/DashboardLayout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Nav } from "react-bootstrap";
import { borrowsBooks, deleteBooks, fatchAllData } from "../healper/axios";
import { toast } from "react-toastify";

const AllBooks = () => {
  const [allBooks, strallBooks] = useState([]);
  const [users, strUsers] = useState();

  useEffect(() => {
    const getallbooks = async () => {
      const { staus, message, data } = await fatchAllData();
      strallBooks(data);
    };
    getallbooks();

    const user = JSON.parse(sessionStorage.getItem("user"));

    strUsers(user);
  }, []);

  const handelOnClick = async (ids) => {
    if (ids) {
      const { status, message } = await borrowsBooks(ids);

      status === "success" ? toast[status](message) : toast[status](message);
    }
  };
  const handelOnDelete = async (ids) => {
    if (window.confirm("Are you sure you want to delete")) {
      if (ids) {
        const { status, message } = await deleteBooks(ids);
        const { data } = await fatchAllData();
        status === "success"
          ? toast[status](message) && strallBooks(data)
          : toast[status](message);
      }
    }
  };
  return (
    <div>
      <DashboardLayouts>
        <Container
          className="mt-5 mb-5"
          style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}
        >
          {allBooks.map((item, i) => {
            return (
              <Card key={i} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.thumbnail} height={"300px"} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text> By {item.author}</Card.Text>
                  <Card.Text> Publish date ({item.yearpublish})</Card.Text>
                </Card.Body>
                <div style={{ display: "flex" }}>
                  {" "}
                  <Button
                    variant="primary"
                    style={{ width: "50%", margin: "10px" }}
                    onClick={() => handelOnClick(item._id)}
                  >
                    Borrow
                  </Button>
                  {users.role === "teacher" && (
                    <Button
                      variant="danger"
                      style={{ width: "50%", margin: "10px" }}
                      onClick={() => handelOnDelete(item._id)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </Container>
      </DashboardLayouts>
    </div>
  );
};

export default AllBooks;
