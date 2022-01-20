const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
    {
        customer_id: { type: String, required: true },
        product: {
            name: { type: String, required: true },
            photo: { type: String },
            unitPrice: { type: Number, required: true },
            unitWeight: { type: Number },
            unitsInStock: { type: Number, required: true },
            size: { type: String },
            color: { type: String },
            storeId: { type: String },
            categoryId: { type: String },
        },
        status: {
            type: String,
            default: "In-stock",
            enum: ["In-stock", "Out-of-stock"]
        },

    },
    {
        timestamps: true,
    }
);

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;