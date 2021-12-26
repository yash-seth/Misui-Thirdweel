import express from "express";
import expressAsyncHandler from "express-async-handler";
import Store from "../models/storeModel.js";

const storeRouter = express.Router();

//to find all stores
//localhost:5000/api/stores/
storeRouter.get('/', expressAsyncHandler(async (req, res) => {
    const stores = await Store.find({});
    res.send(stores);
}));

//to find a store details
//localhost:5000/api/stores/61c87eb08de4326b654190f3
storeRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const store = await Store.findById(req.params.id);
    if (store) {
        res.send(store);
    }
    else {
        res.status(404).send({ message: 'Store not found' })
    }

}));

//to create new store
//localhost:5000/api/stores/
storeRouter.post('/', expressAsyncHandler(async (req, res) => {
    const store = new Store({
        name: req.body.name,
        location: req.body.location,
        openingTime: req.body.openingTime,
        availability: req.body.availability,
        details: req.body.details,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        orderType: req.body.orderType,
        sellerDetails: {
            sellerId: req.body.sellerId,
            sellerRole: req.body.sellerRole
        }
    });
    const createdStore = await store.save();
    res.send({ message: 'Store Created', store: createdStore });
})

);

export default storeRouter;