// import { Route, BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./component/layout/Header";
import Login from "./Login";
import Register from "./Register";
import Add from "./component/product/Add";
import Edit from "./component/product/Edit";
import List from "./component/product/List";
import Restaurant from "./component/restro/Restaurant";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1>Welcome to React E-Comm</h1> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-add" element={<Add />} />
        <Route path="/product-edit" element={<Edit />} />
        <Route path="/product-list" element={<List />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
