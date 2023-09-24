import React, { useEffect, useState } from "react";
import { borrowBooksByUserId, retunBooks } from "../healper/axios";
import DashboardLayouts from "../comp/Layouts/DashboardLayout";
import { Button, Card, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { all } from "axios";
import { toast } from "react-toastify";

const MyBooks = () => {
  const [allBooks, strallBooks] = useState([]);
  const fatchBorrowBooks = async () => {
    const { data } = await borrowBooksByUserId();
    console.log(data);
    strallBooks(data);
  };

  const handelOnDelete = async (ids) => {
    if (window.confirm("Are you sure you want to return this book ?")) {
      if (ids) {
        const { status, message } = await retunBooks(ids);
        const { data } = await borrowBooksByUserId();
        status === "success"
          ? toast[status](message) && strallBooks(data)
          : toast[status](message);
      }
    }
  };
  useEffect(() => {
    fatchBorrowBooks();
  }, []);
  return (
    <DashboardLayouts>
      <Container>
        <h5>Borrow Books ({allBooks.length})</h5>{" "}
      </Container>
      {allBooks.length < 1 ? (
        <>
          <Container
            style={{
              height: "30vh",
              marginTop: "10rem",
              textAlign: "center",
            }}
          >
            <h1>"You havent borrow any books"</h1>
            <h3>
              <NavLink to="/allbooks">
                <Button variant="primary">Borrow books</Button>
              </NavLink>
            </h3>
          </Container>
        </>
      ) : (
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
                    variant="danger"
                    style={{ width: "50%", margin: "10px" }}
                    onClick={() => handelOnDelete(item._id)}
                    Date
                  >
                    Return Books
                  </Button>
                </div>
              </Card>
            );
          })}
        </Container>
      )}
    </DashboardLayouts>
  );
};

export default MyBooks;
