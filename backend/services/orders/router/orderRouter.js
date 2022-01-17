const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Order = require('../model/orders');

const orderRouter = express.Router();

//to get all orders(admin will be able to see all orders)
orderRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find({});
        res.send(orders);
    })
);

module.exports = orderRouter;