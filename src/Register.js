import React, { useState } from "react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function SignUp() {
    let item = { name, email, password };
    console.warn(item);
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
        Register
      </button>
    </div>
  );
}
export default Register;
