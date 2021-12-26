import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        location: { type: String, required: true },
        openingTime: { type: String, required: true },
        availability: { type: Boolean, required: true },
        details: { type: String, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        orderType: { type: String, required: true },
        sellerDetails: {
            sellerId: { type: String },
            sellerRole: { type: String }
        }
    },
    {
        timestamps: true,
    }
);

const Store = mongoose.model('Store', storeSchema);
export default Store;