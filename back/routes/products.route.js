const express = require("express")
const ProductRouter = express.Router()

ProductRouter.get("/list", (req, res)=>{
    res.json({
        success: true,
        message: "Dummy list of products"
    })
})
module.exports = ProductRouter