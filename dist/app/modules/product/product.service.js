"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = require("../product.model");
const createProductDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(product);
    return result;
});
const getAllProductsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find();
    return result;
});
const getSingleProductDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findOne({ _id: id });
    return result;
});
const updateProductDB = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndUpdate(id, product, {
        new: true,
    }); //finds a product by its id and updates it then returns it
    return result;
});
const deleteProductDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndDelete(id, { new: true });
    return result;
});
const searchProductDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, 'i');
    const result = yield product_model_1.productModel.find({
        $or: [
            { name: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $regex: regex } }
        ]
    }).exec();
    return result;
});
exports.ProductServices = {
    createProductDB,
    getAllProductsDB,
    getSingleProductDB,
    updateProductDB,
    deleteProductDB,
    searchProductDB,
};
