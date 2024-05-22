import Joi from 'joi';

// Define the Variant schema
const variantValidationSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

// Define the Inventory schema
const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().integer().min(0).required(),
  inStock: Joi.boolean().required(),
});

// Define the Product schema
const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().greater(0).required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  variants: Joi.array().items(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;