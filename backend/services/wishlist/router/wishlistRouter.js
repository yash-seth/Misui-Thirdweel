const express = require('express');
const expressAsyncHandler = require("express-async-handler");
const Wishlist = require('../model/wishlist');
const upload = require("../utils/multer");
const auth = require('../utils/auth');
const { isAuth } = auth;

const wishlistRouter = express.Router();

//to get all wishlists
wishlistRouter.get('/', expressAsyncHandler(async (req, res) => {
    const wishlists = await Wishlist.find({});
    res.send(wishlists);
}));

//to get a single wishlist
wishlistRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const wishlist = await Wishlist.findById(req.params.id);
        if (wishlist) {
            res.send(wishlist);
        } else {
            res.status(404).send({ message: 'wishlist Not Found' });
        }
    })
);

//to create new wishlist
wishlistRouter.post('/', isAuth, upload.single("photo"), expressAsyncHandler(async (req, res) => {

    //create new wishlist
    const wishlist = new Wishlist({
        customer_id: req.customer._id,
        product: req.body.product,
        status: req.body.status,
    });

    //save wishlist
    const createdWishlist = await wishlist.save();

    res.send({ message: 'Wishlist Created', wishlist: createdWishlist });

})
);

//delete order from orderlist(admin functinality)
wishlistRouter.delete(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const wishlist = await Wishlist.findById(req.params.id);
        if (wishlist) {
            const deleteWishlist = await wishlist.remove();
            res.send({ message: 'wishlist Deleted', wishlist: deleteWishlist });
        } else {
            res.status(404).send({ message: 'Wishlist Not Found' });
        }
    })
);

module.exports = wishlistRouter;