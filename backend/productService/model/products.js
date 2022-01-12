const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        storeId: { type: String },
        categoryId: { type: String },
        quantityPerUnit: { type: Number },
        unitPrice: { type: Number, required: true },
        discount: { type: Number },
        unitWeight: { type: Number },
        unitsInStock: { type: Number, required: true },
        unitsOnOrder: { type: Number },
        photos: { type: String },
        rating: { type: Number },
        rankRating: { type: Number },
        size: { type: String },
        color: { type: String }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;