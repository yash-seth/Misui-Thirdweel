const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../productData');
const Product = require('../model/products');

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
    expressAsyncHandler(async (req, res) => {
        const product = new Product(req.body);
        const createdProduct = await product.save();
        res.send({ message: 'Product Created', product: createdProduct });
    })
);

//to update product
productRouter.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        let product = await Product.findById(productId);
        if (product) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.unitPrice = req.body.unitPrice;
            product.discount = req.body.discount;
            product.size = req.body.size;
            product.color = req.body.color;
            product.unitsInStock = req.body.unitsInStock;
            product.rating = req.body.rating;

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

module.exports = productRouter;