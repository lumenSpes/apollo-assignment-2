import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProdut);
router.get('/', ProductControllers.getAllProducts);
router.get('/:id', ProductControllers.getSingleProduct);
router.put('/:id', ProductControllers.updateProduct);
router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRoutes = router;
