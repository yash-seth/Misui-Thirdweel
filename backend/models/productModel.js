import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        kind: {
            service: { type: Boolean, required: true },
            product: { type: Boolean, required: true },
        },
        subKind: {
            branded: { type: String, required: true },
            unbranded: { type: String, required: true },
            exotic: {
                isHandmade: { type: Boolean, required: true },
                isHomemade: { type: Boolean, required: true },
            }
        },
        image: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },
        subCategory: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
        tags: { type: String, required: true },
        brand: { type: String, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

export default Product;