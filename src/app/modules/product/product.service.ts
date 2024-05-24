import { productModel } from '../product.model';
import { TProduct } from './product.interface';

const createProductDB = async (product: TProduct) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductsDB = async () => {
  const result = await productModel.find();
  return result;
};

const getSingleProductDB = async (id: string) => {
  const result = await productModel.findOne({ _id: id });
  return result;
};

const updateProductDB = async (id: string, product: TProduct) => {
  const result = await productModel.findByIdAndUpdate(id, product, {
    new: true,
  }); //finds a product by its id and updates it then returns it
  return result;
};

const deleteProductDB = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id, { new: true });
  return result;
};

const searchProductDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await productModel
    .find({
      $or: [
        { name: { $regex: regex } },
        { category: { $regex: regex } },
        { tags: { $regex: regex } },
      ],
    })
    .exec();
  return result;
};

export const ProductServices = {
  createProductDB,
  getAllProductsDB,
  getSingleProductDB,
  updateProductDB,
  deleteProductDB,
  searchProductDB,
};
