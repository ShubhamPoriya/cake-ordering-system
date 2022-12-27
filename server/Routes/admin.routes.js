const express = require("express");
const router = express.Router();
const itemController = require("../Controllers/admin.controllers");

router.get("/get-items", itemController.getItems);
router.post("/add-item", itemController.addItem);
router.post("/update-item", itemController.updateItem);
router.post("/delete-item", itemController.deleteItem);

module.exports = router;
