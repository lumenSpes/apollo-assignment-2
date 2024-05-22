import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post("/", ProductControllers.createProdut);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);

export const ProductRoutes = router;