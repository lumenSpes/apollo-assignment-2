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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order: OrderData } = req.body;
        const { error } = order_validation_1.default.validate(OrderData);
        const result = yield order_service_1.OrderServices.createOrderDB(OrderData);
        if (error) {
            return res.status(500).json({
                success: false,
                message: 'Validation Error Occurred.',
                error: error.details,
            });
        }
        return res.status(201).json({
            success: true,
            message: 'Order created successfully.',
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There was a problem creating the Order.',
            error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (email && typeof email === 'string') {
            try {
                const result = yield order_service_1.OrderServices.searchOrderDB(email);
                return res.status(200).json({
                    success: true,
                    message: 'Orders retrieved successfully.',
                    data: result,
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: 'There was a problem fetching the Orders.',
                    error,
                });
            }
        }
        else {
            const result = yield order_service_1.OrderServices.getAllOrdersDB();
            return res.status(200).json({
                success: true,
                message: 'Order retrieved successfully.',
                data: result,
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'There was a problem fetching the Orders.',
            error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
};
