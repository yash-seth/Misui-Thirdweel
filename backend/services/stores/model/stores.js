const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }
    }
);

const storeSchema = new mongoose.Schema(
    {
        storeName: { type: String, required: true },
        category: [categorySchema],
        address: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        contactNumber: { type: Number, min: 10, unique: true },
        email: { type: String, required: true, unique: true },
        logo: { type: String }
    },
    {
        timestamps: true,
    }
);

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;