import { orderModel } from '../order.model';
import { TOrder } from './order.interface';

const createOrderDB = async (order: TOrder) => {
  const result = await orderModel.create(order);
  return result;
};

const getAllOrdersDB = async () => {
  const result = await orderModel.find();
  return result;
};

const searchOrderDB = async (email: string) => {
  const result = await orderModel.find({ email: email });
  return result;
};

export const OrderServices = {
  createOrderDB,
  getAllOrdersDB,
  searchOrderDB,
};
