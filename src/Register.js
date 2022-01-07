import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  async function SignUp() {
    let item = { name, email, password };
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/register");
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Register </h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <br></br>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        className="form-control"
      />
      <br></br>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        className="form-control"
      />
      <br></br>
      <button onClick={SignUp} className="btn  btn-primary">
        save
      </button>
    </div>
  );
}
export default Register;
