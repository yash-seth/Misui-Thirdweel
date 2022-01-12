import express from "express";
import expressAsyncHandler from "express-async-handler";
import Review from "../models/reviewModel.js";
import { isAuth } from "../utils/utils.js";

const reviewRouter = express.Router();

reviewRouter.get('/', expressAsyncHandler(async (req, res) => {
    const reviews = await Review.find({});
    res.send(reviews);
}));

reviewRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const review = new Review(req.body);
    console.log(review)
    const newReview = await review.save();
    res.send({ message: 'Review Created', review: newReview });
}));

export default reviewRouter;