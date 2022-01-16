import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/Login");
    }
  }, []);

  async function SignIn() {
    let item = { email, password };
    // console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    //  console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/");
  }
  return (
    <div>
      <div className="col-sm-6 offset-sm-3">
        <h1>User Login </h1>
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
        <button onClick={SignIn} className="btn  btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
