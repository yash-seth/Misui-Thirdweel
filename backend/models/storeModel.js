import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        category: { type: String },
        contactNo: { type: Number },
        image: { type: String },
        cloudinary_id: { type: String },
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

storeSchema.query = {
    byCategory: function (type) {
        return this.find({ category: new RegExp(type, "i") });
    }
};

const Store = mongoose.model('Store', storeSchema);
export default Store;