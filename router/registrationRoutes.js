const {registerCustomer}=require("../controller/registrationController")
const express = require("express")
const router = express.Router()
router.post("/post",registerCustomer)
module.exports = registerCustomer