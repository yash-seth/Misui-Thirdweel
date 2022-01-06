import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: String },
        gender: { type: String },
        phone: { type: Number, required: true, unique: true, min: 10 },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: String },
        isAdmin: { type: Boolean, default: false, required: true },
        isSeller: { type: Boolean, default: false, required: true },
        sellerRole: {
            isOwner: { type: Boolean, default: false, required: true },
            isManager: { type: Boolean, default: false, required: true },
            isStaff: { type: Boolean, default: false, required: true },
        },
        stores: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Store'
        }]
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('User', userSchema);
export default User;