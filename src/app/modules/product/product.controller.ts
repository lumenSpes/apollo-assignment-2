import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { TProduct } from './student.interface';
import productValidationSchema from './product.validation';

const createProdut = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;

    const { error } = productValidationSchema.validate(ProductData);

    const result = await ProductServices.createProductDB(ProductData);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'There was a problem creating the product.',
        error: error.details,
      });
    }

    res.status(201).json({
      success: true,
      message: 'Product created successfully.',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'There was a problem creating the product.',
      error: error,
    });
  }
};

export const ProductControllers = {
  createProdut,
};
