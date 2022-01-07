import React, { useState } from "react";
import MenuCard from "./MenuCard.js";
import Menu from "./MenuApi.js";
import "./Style.css";
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData);
  return (
    <>
      <div className="">
        <nav className="nav" id="menu">
          <button className="btn">Breakfast</button>
          <button className="btn">Lunch</button>
          <button className="btn">Evening</button>
          <button className="btn">Dinner</button>
          <button className="btn">All</button>
        </nav>
        <MenuCard menuData={menuData} />
      </div>
    </>
  );
};
export default Restaurant;
