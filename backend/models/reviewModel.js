import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        userId: { type: String },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
        category: { type: String, required: true },
        productId: { type: String },
        storeId: { type: String },
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model('Review', reviewSchema);
export default Review;