import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        category: { type: String },
        contactNo: { type: Number, min: 10, unique: true },
        image: { type: String },
        cloudinary_id: { type: String },
        location: { type: String, required: true },
        address: { type: String },
        openingTime: { type: String, required: true },
        availability: { type: Boolean, required: true },
        details: { type: String, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        orderType: { type: String, required: true },
        sellerDetails: {
            sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        }
    },
    {
        timestamps: true,
    }
);

storeSchema.query = {
    byCategory: function (type) {
        return this.find({ category: new RegExp(type, "i") });
    }
};

const Store = mongoose.model('Store', storeSchema);
export default Store;