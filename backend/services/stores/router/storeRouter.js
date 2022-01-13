const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const data = require('../storeData');
const Store = require("../model/stores");

const storeRouter = express.Router();

storeRouter.get('/seed', expressAsyncHandler(async (req, res) => {

    //to remove store in emergency case
    //await Store.deleteMany({});
    const createdStores = await Store.insertMany(data.stores);
    res.send({ createdStores });
    res.status(500).send({ message: 'No seller found. first run /api/users/seed' });

}));

//to find all stores
//localhost:5002/api/stores/
storeRouter.get('/', expressAsyncHandler(async (req, res) => {
    const stores = await Store.find({});
    res.send(stores);
}));

//to find a store details by id
//localhost:5002/api/stores/getById/:id
storeRouter.get('/getById/:id', expressAsyncHandler(async (req, res) => {
    // console.log(req.params);
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

    //create new store
    const store = new Store(req.body);
    //save store
    const createdStore = await store.save();

    res.send({ message: 'Store Created', store: createdStore });

})
)

module.exports = storeRouter;