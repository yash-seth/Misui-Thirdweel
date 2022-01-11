import express from 'express';
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js'
import Product from '../models/productModel.js';
import { isAuth, isAdmin } from '../utils/utils.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    //to remove product in emergency case
    //await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({ message: 'Product not found' })
    }

}));

//to create new product
productRouter.post(
    '/',
    isAuth, isAdmin, upload.single("image"),
    expressAsyncHandler(async (req, res) => {
        //upload image to cloudinary
        const result = await cloudinary.v2.uploader.upload(req.file.path);
        const product = new Product({
            name: req.body.name,
            image: result.secure_url,
            cloudinary_id: result.public_id,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            brand: req.body.brand,
            countInStock: req.body.countInStock,
            // rating: req.body.rating,
            // numReviews: req.body.numReviews,
        });
        const createdProduct = await product.save();
        res.send({ message: 'Product Created', product: createdProduct });
    })
);

//to update product
productRouter.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (product) {
            product.name = req.body.name;
            product.kind = req.body.kind;
            product.image = req.body.image;
            product.price = req.body.price;
            product.category = req.body.category;
            product.subCategory = req.body.subCategory;
            product.description = req.body.description;
            product.size = req.body.size;
            product.color = req.body.color;
            product.tags = req.body.tags;
            product.brand = req.body.brand;
            product.countInStock = req.body.countInStock;
            product.rating = req.body.rating;
            product.numReviews = req.body.numReviews;

            const updatedProduct = await product.save();
            res.send({ message: 'Product Updated', product: updatedProduct });
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

//to delete product
productRouter.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            const deleteProduct = await product.remove();
            res.send({ message: 'Product Deleted', product: deleteProduct });
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);

export default productRouter;