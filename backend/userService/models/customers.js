const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
    {
        address: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: Number },
    }
);

const customerSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String },
        addresses: [addressSchema],
        phone: { type: Number, required: true, unique: true, min: 10 },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePicture: { type: String },
    },
    {
        timestamps: true,
    }
);
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;