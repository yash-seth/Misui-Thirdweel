import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        kind: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
        tags: { type: String, required: true },
        brand: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

export default Product;