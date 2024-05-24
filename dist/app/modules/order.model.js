"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    productId: {
        type: String,
        required: [true, 'Product ID is required'],
        trim: true,
        minlength: [3, 'Product ID must be at least 3 characters long'],
        maxlength: [50, 'Product ID must be at most 50 characters long'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Minimun quantity is 1'],
    },
});
exports.orderModel = (0, mongoose_1.model)('Order', orderSchema);
