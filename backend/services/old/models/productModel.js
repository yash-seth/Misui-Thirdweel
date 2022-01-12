import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        kind: {
            service: { type: Boolean },
            product: { type: Boolean },
        },
        subKind: {
            branded: { type: Boolean },
            unbranded: { type: Boolean },
            exotic: {
                isHandmade: { type: Boolean },
                isHomemade: { type: Boolean },
            }
        },
        image: { type: String, required: true },
        cloudinary_id: { type: String },
        price: { type: String, required: true },
        category: { type: String, required: true },
        subCategory: { type: String },
        description: { type: String, required: true },
        size: { type: String },
        color: { type: String },
        tags: { type: String },
        brand: { type: String },
        countInStock: { type: Boolean, required: true },
        // rating: { type: Number, required: true },
        // numReviews: { type: Number },
        storeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store'
        }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

export default Product;