import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        age: { type: String },
        gender: { type: String },
        phone: { type: Number, required: true, unique: true, min: 10 },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        isSeller: { type: Boolean, default: false, required: true },
        sellerRole: {
            isOwner: { type: Boolean, default: false },
            isManager: { type: Boolean, default: false },
            isStaff: { type: Boolean, default: false },
        },
        seller: [{
            storeId: { type: String },
        }]
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);
export default User;