// import { Route, BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/layout/Header";
import Login from "./Login";
import Register from "./Register";
import Add from "./component/product/Add";
import Edit from "./component/product/Edit";
import List from "./component/product/List";
import Restaurant from "./component/restro/Restaurant";
import FavoriteColor from "./component/FavoriteColor";
import CrudComponent from "./component/crud/CrudComponent";
import Cart from "./component/shop/Cart";
import Woocom from "./component/woocommerce/Woocom";
import Counter from "./component/counter/Counter";
import Notfound from "./component/layout/Notfound";

// import axios from "axios";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/product-add" element={<Add />} />
          <Route exact path="/product-edit" element={<Edit />} />
          <Route exact path="/product-list" element={<List />} />
          <Route exact path="/restaurant" element={<Restaurant />} />
          <Route exact path="/color" element={<FavoriteColor />} />
          <Route exact path="/crud" element={<CrudComponent />} />
          <Route path="/" element={<Restaurant />} />
          <Route path="/shop" element={<Cart />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/woocomerce" element={<Woocom />} />
          <Route component={Notfound} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
