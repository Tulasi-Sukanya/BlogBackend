const express = require("express");
const homeapi = require('../Api/Home')

const home = express.Router()
home.route("/").get(homeapi.apiController)

module.exports=home;