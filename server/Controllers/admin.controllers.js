const Item = require("../Models/item");

const addItem = (req, res) => {
  const cakeName = req.body.cakeName;
  const cakeDesc = req.body.cakeDesc;
  const cakePrice = req.body.cakePrice;
  const cakePhoto = req.body.cakePhoto;

  Item.insertOne([
    {
      itemName: cakeName,
      itemDesc: cakeDesc,
      itemPrice: cakePrice,
    },
  ])
    .then((data) => {
      res.send(data);
      console.log("item added!");
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
