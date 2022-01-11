const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        quantityPerUnit: { type: Number },
        unitPrice: { type: Number },
        discount: { type: Number },
        unitWeight: { type: Number },
        unitsInStock: { type: Number },
        unitsOnOrder: { type: Number },
        photos: { type: String, required: true },
        rating: { type: Number },
        numRating: { type: Number },
        size: { type: String },
        color: { type: String }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;