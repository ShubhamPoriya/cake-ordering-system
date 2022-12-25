const express = require("express");
const router = express.Router();
const itemController = require("../Controllers/admin.controllers");

router.get("/getItems", itemController.getItems);
router.post("/addItem", itemController.addItem);

module.exports = router;
