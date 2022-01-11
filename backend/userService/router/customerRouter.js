const express = require('express');
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const data = require("../data");
const router = express.Router();
const Customer = require('../models/customers');
const auth = require('../utils/auth');
const { generateToken, isAuth } = auth;

router.get('/seed', expressAsyncHandler(async (req, res) => {
    //to remove Customer in emergency case
    //await Customer.deleteMany({});
    const createdCustomers = await Customer.insertMany(data.customers);
    res.send(createdCustomers);
}));

//Customer signin
router.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const customer = await Customer.findOne({ email: req.body.email });
        if (customer) {
            if (bcrypt.compareSync(req.body.password, customer.password)) {
                res.status(200).send({
                    customer,
                    token: generateToken(customer),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

//Customer register
router.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        //validation
        const customerExists = await Customer.findOne({ email: req.body.email });
        if (customerExists) {
            return res.status(422).json({ message: 'Email already exists' })
        }
        const customer = new Customer({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdCustomer = await customer.save();
        res.send(createdCustomer);
    })
);

//get single Customer details
router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(404).send({ message: 'Customer Not Found' });
        }
    })
);

//update Customer details
router.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const customer = await Customer.findById(req.customer._id);
        if (customer) {
            customer.firstname = req.body.firstname || customer.firstname;
            customer.lastname = req.body.lastname || customer.lastname;
            customer.email = req.body.email || customer.email;
            if (req.body.password) {
                customer.password = bcrypt.hashSync(req.body.password, 8);
            }
            const updatedCustomer = await customer.save();
            console.log(updatedCustomer)
            res.send({
                updatedCustomer,
                token: generateToken(updatedCustomer),
            });
        }
    })
);

//to get all Customers
router.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const customers = await Customer.find({});
        res.send(customers);
    })
);

//to delete customer except admin
router.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            const deleteCustomer = await customer.remove();
            res.send({ message: 'Customer Deleted', customer: deleteCustomer });
        } else {
            res.status(404).send({ message: 'Customer Not Found' });
        }
    })
);

module.exports = router;