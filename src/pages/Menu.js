import React from "react";
import MenuInfo from "../components/Menu/MenuInfo/MenuInfo";
import OurMenu from "../components/Menu/OurMenu/OurMenu";
import SideMenu from "../components/Menu/SideMenu/SideMenu";
import WeekDish from "../components/Menu/WeedkDish/WeekDish";

const Menu = () => {
  return (
    <div>
      <MenuInfo />
      <OurMenu />
      <SideMenu />
      <WeekDish />
    </div>
  );
};

export default Menu;
