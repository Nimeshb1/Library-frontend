import React, { useEffect, useState } from "react";
import { getAlltransaction, retunBooks } from "../healper/axios";
import DashboardLayouts from "../comp/Layouts/DashboardLayout";
import { Container, Table } from "react-bootstrap";

const Transactions = () => {
  const [trans, strtrans] = useState([]);
  console.log(trans);

  const fatchTransaction = async () => {
    const res = await getAlltransaction();
    strtrans(res.data);
    // const retBooks = await retunBooks(trans._id);
  };
  useEffect(() => {
    fatchTransaction();
  }, []);

  return (
    <>
      <DashboardLayouts>
        <Container>
          <Table
            striped
            bordered
            hover
            style={{
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                {" "}
                <th>S.N</th>
                <th>Title</th>
                <th>thumbnail</th>
                <th>Author</th>
                <th>Borrowed By</th>
                <th>Borroed Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {trans?.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item?.borrowsBooks?.title}</td>
                  <td>
                    <img
                      src={item?.borrowsBooks?.thumbnail}
                      alt=""
                      height={90}
                    />
                  </td>
                  <td>{item?.borrowsBooks?.author}</td>
                  <td>
                    {item?.borrowBy?.userFname +
                      " " +
                      item?.borrowBy?.userLname}
                  </td>
                  <td>{new Date(item?.createdAt).toLocaleDateString()}</td>
                  <td>
                    {item?.returnDates ? (
                      new Date(item?.returnDates).toLocaleDateString()
                    ) : (
                      <div className="text-danger">Not yet Return</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </DashboardLayouts>
    </>
  );
};

export default Transactions;
