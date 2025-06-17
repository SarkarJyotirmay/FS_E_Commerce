const express = require("express")
const {listProduct, createProduct, getProduct} =  require("../controllers/products.controllers.js")
const ProductRouter = express.Router()

ProductRouter.get("/list", listProduct)

ProductRouter.post("/create", createProduct)

ProductRouter.get("/:_id", getProduct)

module.exports = ProductRouter