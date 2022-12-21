const Item = require("../Models/item");

const addItem = (req, res) => {
  Item.insertMany([
    {
      itemName: "Black Forest",
      itemDesc:
        "Chocolate cake with vanilla icing and decorated with milk chocolate flakes.",
      itemPrice: 1000,
    },
    {
      itemName: "Belgian Chocolate",
      itemDesc:
        "Dutch Chocolate cake with chocolate ganache icing and decorated with dark chocolate flakes.",
      itemPrice: 2000,
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
