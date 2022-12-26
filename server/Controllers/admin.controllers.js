const Item = require("../Models/item");
require("dotenv").config;

const addItem = async (req, res) => {
  const cakeName = req.body.cakeName;
  const cakeDesc = req.body.cakeDesc;
  const cakePrice = req.body.cakeBasePrice;

  await Item.insertMany([
    {
      itemName: cakeName,
      itemDesc: cakeDesc,
      itemBasePrice: cakePrice,
    },
  ])
    .then((data) => {
      res.send(data);
      console.log("Item added!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getItems = (req, res) => {
  Item.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addItem,
  getItems,
};
