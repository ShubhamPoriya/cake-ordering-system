const Item = require("../Models/item");
const upload = require("../Middleware/upload");
require("dotenv").config;

const uploadItem = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.file);

    if (req.file == undefined) {
      return res.send({ message: "You must select a file" });
    } else {
      return res.send({ message: "File has been uploaded" });
    }
  } catch (error) {
    console.log(error);
    return res.send({ message: "Error when trying to upload image" });
  }
};

const addItem = async (req, res) => {
  const cakeName = req.body.cakeName;
  const cakeDesc = req.body.cakeDesc;
  const cakePrice = req.body.cakeBasePrice;
  const cakePhoto = req.body.cakeImage;
  console.log(req.body);

  await Item.insertMany([
    {
      itemName: cakeName,
      itemDesc: cakeDesc,
      itemBasePrice: cakePrice,
      itemImage: cakePhoto,
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
  uploadItem,
};
