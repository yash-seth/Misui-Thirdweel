const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        customerId: { type: String, required: true },
        orderDate: {
            type: Date,
            default: Date.now(),
        },
        status: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        total: { type: Number, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;