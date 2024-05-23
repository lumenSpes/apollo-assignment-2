import Joi from 'joi';
import { TOrder } from './order.interface';

const orderValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
    }),
  productId: Joi.string().trim().min(3).max(50).required().messages({
    'string.empty': 'Product ID is required',
    'string.min': 'Product ID must be at least 3 characters long',
    'string.max': 'Product ID must be at most 50 characters long',
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': 'Price must be a number',
    'number.min': 'Price cannot be negative',
    'any.required': 'Price is required',
  }),
  quantity: Joi.number().min(1).required().messages({
    'number.base': 'Quantity must be a number',
    'number.min': 'Minimum quantity is 1',
    'any.required': 'Quantity is required',
  }),
});

export default orderValidationSchema; 
