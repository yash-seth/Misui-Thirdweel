const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        paymentType: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;