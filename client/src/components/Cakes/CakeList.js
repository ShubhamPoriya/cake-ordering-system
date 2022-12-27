import classes from "./CakeList.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cake from "./Cake";

const CakeList = () => {
  const [items, setItems] = useState([]);

  const loadCakeDetailsHandler = async () => {
    const response = await axios.get("http://localhost:8080/admin/get-items");
    setItems(response.data);
  };

  const updateCakeDetailsHandler = async () => {
    const response = await axios.post(
      "http://localhost:8080/admin/update-item"
    );
    console.log(response);
    setTimeout(() => {
      loadCakeDetailsHandler();
    }, 500);
  };

  const deleteCakeDetailsHandler = async (cakeId) => {
    const response = await axios.post(
      "http://localhost:8080/admin/delete-item",
      { id: cakeId }
    );
    console.log(response);
    setTimeout(() => {
      loadCakeDetailsHandler();
    }, 500);
  };

  useEffect(() => {
    loadCakeDetailsHandler();
  }, []);

  const cakesList = items.map((item) => (
    <Cake
      key={item._id}
      cakeName={item.itemName}
      cakeDesc={item.itemDesc}
      cakeBasePrice={item.itemBasePrice}
      updateHandler={updateCakeDetailsHandler.bind(null, item._id)}
      deleteHandler={deleteCakeDetailsHandler.bind(null, item._id)}
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
