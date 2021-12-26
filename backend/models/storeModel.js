import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        location: { type: String, required: true },
        openingTime: { type: Number, required: true },
        availability: { type: Boolean, required: true },
        details: { type: String, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        orderType: { type: String, required: true },
        sellerDetails: {
            sellerId: { type: string },
            sellerRole: { type: string }
        }
    },
    {
        timestamps: true,
    }
);

const Store = mongoose.model('Store', storeSchema);
export default Store;