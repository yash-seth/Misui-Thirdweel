import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: String },
        gender: { type: String },
        phone: { type: Number, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        isSeller: { type: Boolean, default: false, required: true },
        seller: {
            store: {
                name: { type: String, required: true, unique: true },
                location: { type: String, required: true },
                openingTime: { type: Number, required: true },
                availability: { type: Boolean, required: true },
                details: { type: String, required: true },
                rating: { type: Number, required: true },
                numReviews: { type: Number, required: true },
                reviews: [reviewSchema],
                orderType: { type: String, required: true },
            },
            role: {
                isOwner: { type: Boolean, default: false, required: true },
                isManager: { type: Boolean, default: false, required: true },
                isStaff: { type: Boolean, default: false, required: true },
            }
        }
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);
export default User;