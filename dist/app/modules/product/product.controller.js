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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createProdut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: ProductData } = req.body;
        const { error } = product_validation_1.default.validate(ProductData);
        const result = yield product_service_1.ProductServices.createProductDB(ProductData);
        if (error) {
            return res.status(500).json({
                success: false,
                message: 'There was a problem creating the product.',
                error: error.details,
            });
        }
        return res.status(201).json({
            success: true,
            message: 'Product created successfully.',
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There was a problem creating the product.',
            error,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        if (searchTerm && typeof searchTerm === 'string') {
            try {
                const result = yield product_service_1.ProductServices.searchProductDB(searchTerm);
                return res.status(200).json({
                    success: true,
                    message: 'Products retrieved successfully.',
                    data: result,
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: 'There was a problem fetching the products.',
                    error,
                });
            }
        }
        else {
            const result = yield product_service_1.ProductServices.getAllProductsDB();
            return res.status(200).json({
                success: true,
                message: 'Product retrieved successfully.',
                data: result,
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There was a problem fetching the products.',
            error,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: ProductId } = req.params;
        const product = yield product_service_1.ProductServices.getSingleProductDB(ProductId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found!!!',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Congatulations! Product found.',
            data: product,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There was a problem fetching the product.',
            error,
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: ProductId } = req.params;
        const { product: ProductData } = req.body;
        const { error } = product_validation_1.default.validate(ProductData);
        if (error) {
            return res.status(500).json({
                success: false,
                message: 'There was a problem updating the product.',
                error: error.details,
            });
        }
        const result = yield product_service_1.ProductServices.updateProductDB(ProductId, ProductData);
        if (!result) {
            return res.status(500).json({
                success: false,
                message: 'Product not found!',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'The product was updated successfully.',
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There was a problem updating the product.',
            error,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: ProductId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductDB(ProductId);
        if (!result) {
            return res.status(500).json({
                success: false,
                message: 'Product not found!',
                data: null,
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Product deleted successfully.',
            data: null,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting product.',
            error,
        });
    }
});
exports.ProductControllers = {
    createProdut,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
