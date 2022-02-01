import React, { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="btn btn-warning"
        type="button"
        onClick={() => setColor("yellow")}
      >
        Pink
      </button>
      <button
        className="btn btn-success"
        type="button"
        onClick={() => setColor("green")}
      >
        Green
      </button>
    </>
  );
}
export default FavoriteColor;
