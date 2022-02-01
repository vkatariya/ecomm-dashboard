import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import { Table } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

function List() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    // let result = await fetch("http://127.0.0.1:8000/api/product-list");
    let result = await fetch("https://fakestoreapi.com/products");
    result = await result.json();
    setData(result);
  }, []);
  console.warn("data", data);

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "title", text: "Title", sort: true },
    { dataField: "price", text: "Price", sort: true },
    { dataField: "description", text: "Description", sort: true },
  ];
  const defaultSorted = [
    {
      dataField: "title",
      order: "desc",
    },
  ];
  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div className="col-sm-8 offset-sm-2">
      <h1>Product List</h1>
      <BootstrapTable
        classes="react-bootstrap-table striped bordered hover "
        variant="dark"
        keyField="id"
        data={data}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
      {/* <Table striped bordered hover variant="">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>
                <img src={item.file_path}></img>
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
}

export default List;
