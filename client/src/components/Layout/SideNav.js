import React from "react";
import classes from "./SideNav.module.css";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <ul>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <Link>
          <li>Profile Settings</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
