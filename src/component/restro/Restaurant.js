import React, { useState } from "react";
import NavbarItem from "./NavbarItem";

import MenuCard from "./MenuCard.js";
import Menu from "./MenuApi.js";

import "./Style.css";

//unquie category list array using new Set ,Map and spread opertor

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

//console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu); //fetch menu items from menu API
  const [menuList, setMenuList] = useState(uniqueList);

  // console.log(menuData);
  // menu Item filter by category

  const filterItem = (category) => {
    //get all data all category
    if (category === "All") {
      setMenuData(Menu);
    }
    // menu Item filter by category

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <NavbarItem filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Restaurant;
