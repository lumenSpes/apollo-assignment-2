"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const orderValidationSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.email': 'Please enter a valid email address',
    }),
    productId: joi_1.default.string().trim().min(3).max(50).required().messages({
        'string.empty': 'Product ID is required',
        'string.min': 'Product ID must be at least 3 characters long',
        'string.max': 'Product ID must be at most 50 characters long',
    }),
    price: joi_1.default.number().min(0).required().messages({
        'number.base': 'Price must be a number',
        'number.min': 'Price cannot be negative',
        'any.required': 'Price is required',
    }),
    quantity: joi_1.default.number().min(1).required().messages({
        'number.base': 'Quantity must be a number',
        'number.min': 'Minimum quantity is 1',
        'any.required': 'Quantity is required',
    }),
});
exports.default = orderValidationSchema;
