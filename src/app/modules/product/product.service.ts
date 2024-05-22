import { productModel } from "../product.model";
import { TProduct } from "./student.interface";

const createProductDB = async (product: TProduct) => {
    const result = await productModel.create(product);
    return result;
}

export const ProductServices = {
    createProductDB,
}