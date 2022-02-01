import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const CrudComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };

  let deleteProduct = (id) => {
    // console.warn(`Delted id ${id}`);
  };

  return (
    <div>
      <table className="table tablr-bordered hover " variant="dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>
                <img width="25px" src={item.image}></img>
              </td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                {/* <Link>View</Link> */}
                <Button className="btn btn-primary mr-2 ">Edit</Button>
                <Button
                  onClick={() => deleteProduct(item.id)}
                  className="btn btn-danger mr-2 "
                >
                  Delete
                </Button>
                {/* <Link className="btn btn-warning mr-2 ">View</Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudComponent;
