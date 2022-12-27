import classes from "./CakeList.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cake from "./Cake";

const CakeList = () => {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8080/admin/get-items");
    setItems(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const cakesList = items.map((item) => (
    <Cake
      key={item._id}
      id={item._id}
      cakeName={item.itemName}
      cakeDesc={item.itemDesc}
      cakeBasePrice={item.itemBasePrice}
    />
  ));

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Available Cakes</h1>
      <ul>{cakesList}</ul>
    </div>
  );
};

export default CakeList;
