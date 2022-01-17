const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Payment = require("../model/payments");

const paymentRouter = express.Router();

//get, create, delete, update payment here

module.exports = paymentRouter;