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
        isStoreOwner: { type: Boolean, default: false, required: true },
        isStoreManager: { type: Boolean, default: false, required: true },
        isStoreStaff: { type: Boolean, default: false, required: true },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);
export default User;