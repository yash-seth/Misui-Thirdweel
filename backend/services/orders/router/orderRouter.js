const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Order = require('../model/orders');
const auth = require('../utils/auth');
const { isAuth } = auth;

const orderRouter = express.Router();

//to get all orders(admin will be able to see all orders)
orderRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find({});
        res.send(orders);
    })
);

//to create new order
orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {

    //create new order
    const order = new Order(req.body);
    //save order
    const createdOrder = await order.save();

    res.send({ message: 'Order Created', order: createdOrder });

})
);

//to get a single order
orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.send(order);
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    })
);

//delete order from orderlist(admin functinality)
orderRouter.delete(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            const deleteOrder = await order.remove();
            res.send({ message: 'Order Deleted', order: deleteOrder });
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    })
);

module.exports = orderRouter;