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

const getSingleProductDB = async ( id: string ) => {
    const result = await productModel.findOne({ _id: id })
    return result;
}

const updateProductDB = async ( id: string, product: TProduct ) => {
    const result = await productModel.findByIdAndUpdate(id, product, { new: true }) //finds a product by its id and updates it then returns it
    return result;
}

const deleteProductDB = async (id: string) => {
    const result = await productModel.findByIdAndDelete(id, { new: true });
    return result;
}

export const ProductServices = {
    createProductDB,
    getAllProductsDB,
    getSingleProductDB,
    updateProductDB,
    deleteProductDB
}