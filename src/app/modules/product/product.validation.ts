import Joi from 'joi';

const variantValidationSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().integer().min(0).required(),
  inStock: Joi.boolean().required(),
});

const productValidationSchema = Joi.object({
  name: Joi.string().max(50).required(),
  description: Joi.string().max(500).required(),
  price: Joi.number().min(50000).required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  variants: Joi.array().items(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;