import { Request, Response } from 'express';
import { ProductServices } from './product.service';
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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsDB();
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully.',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'There was a problem fetching the products.',
      error: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id: productId } = req.params;
    const product = await ProductServices.getSingleProductDB(productId);

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product not found!!!',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Congatulations! Product found.',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'There was a problem fetching the product.',
      error: error,
    });
  }
};

export const ProductControllers = {
  createProdut,
  getAllProducts,
  getSingleProduct,
};
