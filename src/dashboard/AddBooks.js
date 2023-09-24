import React, { useState } from "react";
import DashboardLayouts from "../comp/Layouts/DashboardLayout";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import InpurForm from "../comp/login_regrestration/InpurForm";
import { Link } from "react-router-dom";
import { addBooks } from "../healper/axios";
import { toast } from "react-toastify";

const AddBooks = () => {
  const initialState = {
    title: "",
    author: "",
    isbn: "",
    yearpublish: "",
    thumbnail: "",
  };
  const [fom, strfom] = useState(initialState);
  const [isloading, strIsLoading] = useState(false);

  console.log(fom);
  const obj = [
    {
      lable: "Title",
      name: "title",
      type: "text",
      placeholder: "Book Title",
      value: fom.title,
      required: true,
    },
    {
      lable: "Author",
      name: "author",
      type: "text",
      placeholder: "Author",
      value: fom.author,
      required: true,
    },
    {
      lable: "ISBN",
      name: "isbn",
      type: "text",
      placeholder: "ISBN",
      value: fom.isbn,
      required: true,
    },
    {
      lable: "Year publish",
      name: "yearpublish",
      type: "number",
      placeholder: "Year",
      value: fom.yearpublish,
      required: true,
    },
    {
      lable: "Thumbnail",
      name: "thumbnail",
      type: "text",
      placeholder: "image",
      value: fom.thumbnail,
      required: true,
    },
  ];

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    strfom({ ...fom, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await addBooks(fom);

    if (status) {
      strfom(initialState);
      return toast[status](message);
    }
  };

  return (
    <DashboardLayouts>
      <Container>
        <Row className="bg-dark mb-5">
          <Col className="col-lg-6 col-md-12 info-2 d-none d-md-flex"> </Col>
          <Col>
            <div className="text-white ">
              <h3 className="text-center p-3 ">Add Books</h3> <Form></Form>
              <hr />
              <Form className="m-5" onSubmit={handelOnSubmit}>
                {obj.map((input, i) => (
                  <InpurForm key={i} {...input} onChange={handelOnChange} />
                ))}

                <div>
                  <Button className="m-1 mt-3" variant="light" type="submit">
                    Add Books
                    <span>
                      {isloading && (
                        <Spinner animation="border" varient="primary" />
                      )}
                    </span>
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </DashboardLayouts>
  );
};

export default AddBooks;
