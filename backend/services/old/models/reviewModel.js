import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
        category: { type: String, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model('Review', reviewSchema);
export default Review;