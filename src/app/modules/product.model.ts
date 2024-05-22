import { Schema, model, connect } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product/student.interface';

const variantsSchema = new Schema<TVariants>({
  type: { 
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  }
})

const productSchema = new Schema<TProduct>({
  id:{ type: String },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  variants: variantsSchema,
  inventory: inventorySchema,
});

const productModel = model<TProduct>('Product', productSchema);