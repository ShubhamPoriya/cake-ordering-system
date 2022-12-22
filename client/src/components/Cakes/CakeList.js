import classes from "./CakeList.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CakeList = () => {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:8080/admin/getItems");
    setItems(res.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Available Cakes</h1>
      {items.map((item, key) => {
        return (
          <div className={classes.cakeCard}>
            <img
              className={classes.cakeImg}
              src={item.itemImage}
              alt={item.itemName}
            />
            <div className={classes.cakeDetails}>
              <p>{item.itemName}</p>
              <p>{item.itemDesc}</p>
              <p>{item.itemBasePrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CakeList;
