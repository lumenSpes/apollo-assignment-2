"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const variantValidationSchema = joi_1.default.object({
    type: joi_1.default.string().required().messages({
        'string.base': 'Type must be a string',
        'any.required': 'Type is required'
    }),
    value: joi_1.default.string().required().messages({
        'string.base': 'Value must be a string',
        'any.required': 'Value is required'
    }),
});
const inventoryValidationSchema = joi_1.default.object({
    quantity: joi_1.default.number().integer().min(0).required().messages({
        'number.base': 'Quantity must be a number',
        'number.integer': 'Quantity must be an integer',
        'number.min': 'Quantity cannot be negative',
        'any.required': 'Quantity is required'
    }),
    inStock: joi_1.default.boolean().required().messages({
        'boolean.base': 'InStock must be a boolean',
        'any.required': 'InStock status is required'
    }),
});
const productValidationSchema = joi_1.default.object({
    name: joi_1.default.string().max(50).required().messages({
        'string.base': 'Name must be a string',
        'string.max': 'Name cannot exceed 50 characters',
        'any.required': 'Name is required'
    }),
    description: joi_1.default.string().max(500).required().messages({
        'string.base': 'Description must be a string',
        'string.max': 'Description cannot exceed 500 characters',
        'any.required': 'Description is required'
    }),
    price: joi_1.default.number().min(0).required().messages({
        'number.base': 'Price must be a number',
        'number.min': 'Price cannot be negative',
        'any.required': 'Price is required'
    }),
    category: joi_1.default.string().required().messages({
        'string.base': 'Category must be a string',
        'any.required': 'Category is required'
    }),
    tags: joi_1.default.array().items(joi_1.default.string().messages({
        'string.base': 'Each tag must be a string'
    })).messages({
        'array.base': 'Tags must be an array of strings'
    }),
    variants: joi_1.default.array().items(variantValidationSchema).messages({
        'array.base': 'Variants must be an array of variant objects'
    }),
    inventory: inventoryValidationSchema.messages({
        'object.base': 'Inventory must be an object'
    })
});
exports.default = productValidationSchema;
