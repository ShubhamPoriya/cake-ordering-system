import React from "react";
import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <a href="#section">Home</a>
      <a href="#section">Orders</a>
      <a href="#section">About Us</a>
    </div>
  );
};

export default SideNav;
