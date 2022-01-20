const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        customer_id: { type: String, required: true },
        orderDate: {
            type: Date,
            default: Date.now(),
        },
        status: {
            type: String,
            required: true,
            default: "Not processed",
            enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
        },
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