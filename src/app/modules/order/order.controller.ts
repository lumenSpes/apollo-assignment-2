import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: OrderData } = req.body;

    const { error } = orderValidationSchema.validate(OrderData);

    const result = await OrderServices.createOrderDB(OrderData);

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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'There was a problem creating the Order.',
      error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (email && typeof email === 'string') {
      try {
        const result = await OrderServices.searchOrderDB(email);
        return res.status(200).json({
          success: true,
          message: 'Orders retrieved successfully.',
          data: result,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: 'There was a problem fetching the Orders.',
          error,
        });
      }
    } else {
      const result = await OrderServices.getAllOrdersDB();
      return res.status(200).json({
        success: true,
        message: 'Order retrieved successfully.',
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'There was a problem fetching the Orders.',
      error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
