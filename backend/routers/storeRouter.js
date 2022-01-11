import express from "express";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";
import expressAsyncHandler from "express-async-handler";
import data from '../data.js';
import Store from "../models/storeModel.js";
import User from "../models/userModel.js";
import { isAdmin, isAuth, isStoreOwnerOrStoreManagerOrAdmin } from "../utils/utils.js";

const storeRouter = express.Router();

storeRouter.get('/seed', expressAsyncHandler(async (req, res) => {


    const seller = await User.findOne({ isSeller: true });
    if (seller) {
        const products = data.stores.map((store) => ({
            ...store,
            sellerDetails: seller._id,
        }));
        //to remove store in emergency case
        //await Store.deleteMany({});
        const createdStores = await Store.insertMany(data.stores);
        res.send({ createdStores });
    } else {
        res
            .status(500)
            .send({ message: 'No seller found. first run /api/users/seed' });
    }
}));

//to find all stores
//localhost:5000/api/stores/
storeRouter.get('/', expressAsyncHandler(async (req, res) => {
    const stores = await Store.find({}).populate('sellerDetails');
    res.send(stores);
}));

//to find a store details by id
//localhost:5000/api/stores/getById/:id
storeRouter.get('/getById/:id', expressAsyncHandler(async (req, res) => {
    // console.log(req.params);
    const store = await Store.findById(req.params.id).populate('sellerDetails');
    if (store) {
        res.send(store);
    }
    else {
        res.status(404).send({ message: 'Store not found' })
    }

}));

//to get store by category
//localhost:5000/api/stores/getByCategory/:category
storeRouter.get('/getByCategory/:category', expressAsyncHandler(async (req, res) => {

    const store = await Store.find({ category: req.params.category }).populate('sellerDetails').exec();
    if (store) {
        res.send(store);
    }
    else {
        res.status(404).send({ message: 'Store not found' })
    }

}));

//to create new store
//localhost:5000/api/stores/
storeRouter.post('/', isAuth, isAdmin, upload.single("image"), expressAsyncHandler(async (req, res) => {
    //upload image to cloudinary
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    //create new store
    const store = new Store({
        name: req.body.name,
        category: req.body.category,
        contactNo: req.body.contactNo,
        image: result.secure_url,
        cloudinary_id: result.public_id,
        location: req.body.location,
        openingTime: req.body.openingTime,
        availability: req.body.availability,
        details: req.body.details,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        orderType: req.body.orderType,
        sellerDetails: req.user._id

    });
    //save store
    const createdStore = await store.save();
    //update the user who is creating the store and push store id to user collection
    await User.updateOne({
        _id: req.user._id
    }, {
        $push: {
            stores: createdStore._id
        }
    });
    res.send({ message: 'Store Created', store: createdStore });

})
)

export default storeRouter;