const Item = require("../Models/item");

CAKE = [
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
];

const addItem = (req, res) => {
  cake_1 = new Item({
    itemName: "Black Forest",
    itemDesc:
      "Chocolate cake with vanilla icing and decorated with milk chocolate flakes.",
    itemBasePrice: 1000,
    itemImage: "Black-Forest-Cake.jpg",
  });
  cake_2 = new Item({
    itemName: "Belgian Chocolate",
    itemDesc:
      "Dutch Chocolate cake with chocolate ganache icing and decorated with dark chocolate flakes.",
    itemBasePrice: 2000,
    itemImage: "Belgian-Chocolate-Cake.jpg",
  });
  Item.create(cake_2, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
    console.log("item saved");
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
