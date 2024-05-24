import Joi from 'joi';

const variantValidationSchema = Joi.object({
  type: Joi.string().required().messages({
    'string.base': 'Type must be a string',
    'any.required': 'Type is required',
  }),
  value: Joi.string().required().messages({
    'string.base': 'Value must be a string',
    'any.required': 'Value is required',
  }),
});

const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().integer().min(0).required().messages({
    'number.base': 'Quantity must be a number',
    'number.integer': 'Quantity must be an integer',
    'number.min': 'Quantity cannot be negative',
    'any.required': 'Quantity is required',
  }),
  inStock: Joi.boolean().required().messages({
    'boolean.base': 'InStock must be a boolean',
    'any.required': 'InStock status is required',
  }),
});

const productValidationSchema = Joi.object({
  name: Joi.string().max(50).required().messages({
    'string.base': 'Name must be a string',
    'string.max': 'Name cannot exceed 50 characters',
    'any.required': 'Name is required',
  }),
  description: Joi.string().max(500).required().messages({
    'string.base': 'Description must be a string',
    'string.max': 'Description cannot exceed 500 characters',
    'any.required': 'Description is required',
  }),
  price: Joi.number().min(0).required().messages({
    'number.base': 'Price must be a number',
    'number.min': 'Price cannot be negative',
    'any.required': 'Price is required',
  }),
  category: Joi.string().required().messages({
    'string.base': 'Category must be a string',
    'any.required': 'Category is required',
  }),
  tags: Joi.array()
    .items(
      Joi.string().messages({
        'string.base': 'Each tag must be a string',
      }),
    )
    .messages({
      'array.base': 'Tags must be an array of strings',
    }),
  variants: Joi.array().items(variantValidationSchema).messages({
    'array.base': 'Variants must be an array of variant objects',
  }),
  inventory: inventoryValidationSchema.messages({
    'object.base': 'Inventory must be an object',
  }),
});

export default productValidationSchema;
