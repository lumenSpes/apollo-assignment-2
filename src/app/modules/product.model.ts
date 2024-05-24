import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product/product.interface';

const variantsSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: [true, 'Variant type is required'],
    trim: true,
    minlength: [2, 'Variant type must be at least 2 characters long'],
    maxlength: [50, 'Variant type must be at most 50 characters long'],
  },
  value: {
    type: String,
    required: [true, 'Variant value is required'],
    trim: true,
    minlength: [1, 'Variant value must be at least 1 character long'],
    maxlength: [100, 'Variant value must be at most 100 characters long'],
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'InStock status is required'],
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [3, 'Product name must be at least 3 characters long'],
    maxlength: [100, 'Product name must be at most 100 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
    minlength: [10, 'Product description must be at least 10 characters long'],
    maxlength: [
      1000,
      'Product description must be at most 1000 characters long',
    ],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Product price cannot be negative'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true,
    minlength: [3, 'Product category must be at least 3 characters long'],
    maxlength: [50, 'Product category cannot be more than 50 characters'],
  },
  tags: {
    type: [String],
    validate: {
      validator: function (tags: string[]) {
        return tags.length <= 10;
      },
      message: 'Product can have at most 10 tags',
    },
  },
  variants: {
    type: [variantsSchema],
    validate: {
      validator: function (variants: TVariants[]) {
        return variants.length <= 50;
      },
      message: 'Product can have at most 50 variants',
    },
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory information is required'],
  },
});

export const productModel = model<TProduct>('Product', productSchema);
