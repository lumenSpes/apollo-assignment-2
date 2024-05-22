import { productModel } from "../product.model";
import { TProduct } from "./student.interface";

const createProductDB = async (product: TProduct) => {
    const result = await productModel.create(product);
    return result;
}

const getAllProductsDB = async () => {
    const result = await productModel.find()
    return result;
}

const getSingleProductDB = async (id: string) => {
    const result = await productModel.findById(id)
    return result;
}

export const ProductServices = {
    createProductDB,
    getAllProductsDB,
    getSingleProductDB,
}