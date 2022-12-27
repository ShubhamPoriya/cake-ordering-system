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

const getItems = async (req, res) => {
  await Item.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateItem = async (req, res) => {
  const cakeId = req.body.id;
  const updatedName = req.body.name;
  const updatedDesc = req.body.desc;
  const updatedBasePrice = req.body.price;

  await Item.findByIdAndUpdate(cakeId, {
    itemName: updatedName,
    itemDesc: updatedDesc,
    itemBasePrice: updatedBasePrice,
  })
    .then((data) => {
      res.send(data);
      console.log("Item updated!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteItem = async (req, res) => {
  const cakeId = req.body.id;
  await Item.findByIdAndRemove(cakeId)
    .then((data) => {
      res.send(data);
      console.log("Item deleted!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  addItem,
  getItems,
  updateItem,
  deleteItem,
};
