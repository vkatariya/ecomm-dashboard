import { Button } from "react-bootstrap";
import { useState } from "react";

function Add() {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();

  function productAdd() {
    let item = { product, price };
    console.warn(item);
  }

  // useEffect(() => {});

  return (
    <>
      <h1>Product Add </h1>

      <div className="form-row">
        <div className="col">
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="form-control"
            placeholder="Product name"
          />
        </div>
        <br></br>
        <div className="col">
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="Produt Price"
          />
        </div>
      </div>
      <br></br>

      <Button onClick={productAdd} variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default Add;
