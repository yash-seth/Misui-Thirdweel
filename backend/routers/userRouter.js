import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken, isAuth, isAdmin } from "../utils/utils.js";

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    //to remove user in emergency case
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
}));

//user signin
userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    age: user.age,
                    gender: user.gender,
                    phone: user.phone,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isSeller: user.isSeller,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

//user register
userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        const user = new User({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            age: createdUser.age,
            gender: createdUser.gender,
            phone: createdUser.phone,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            isSeller: createdUser.isSeller,
            sellerRole: {
                isOwner: createdUser.isOwner,
                isManager: createdUser.isManager,
                isStaff: createdUser.isStaff,
            },
            seller: [
                {
                    storeId: createdUser.storeId,
                }
            ],
            token: generateToken(createdUser),
        });
    })
);

//get single user details
userRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);

//update user details
userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            }
            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                name: updatedUser.name,
                age: updatedUser.age,
                gender: updatedUser.gender,
                phone: updatedUser.phone,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                isSeller: updatedUser.isSeller,
                sellerRole: {
                    isOwner: updatedUser.isOwner,
                    isManager: updatedUser.isManager,
                    isStaff: updatedUser.isStaff,
                },
                token: generateToken(updatedUser),
            });
        }
    })
);

//to get all users
userRouter.get(
    '/',
    // isAuth,
    // isAdmin,
    expressAsyncHandler(async (req, res) => {
        const users = await User.find({});
        res.send(users);
    })
);

//to delete user except admin
userRouter.delete(
    '/:id',
    // isAuth,
    // isAdmin,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            if (user.email === 'admin@admin.com') {
                res.status(400).send({ message: 'Can Not Delete Admin User' });
                return;
            }
            const deleteUser = await user.remove();
            res.send({ message: 'User Deleted', user: deleteUser });
        } else {
            res.status(404).send({ message: 'User Not Found' });
        }
    })
);

export default userRouter;