import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: String, required: true },
        gender: { type: String, required: true },
        phone: { type: Number, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        isSeller: { type: Boolean, default: false, required: true },
        seller: {
            storeName: { type: String, required: true, unique: true },
            rating: { type: Number, required: true },
            numReviews: { type: Number, required: true },
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