const express = require("express");
const router = express.Router();
const { products } = require("../service/products");

router.get("/", products);

module.exports = router;
