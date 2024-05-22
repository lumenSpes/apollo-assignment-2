import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post("/", ProductControllers.createProdut);
router.get("/", ProductControllers.createProdut);

export const ProductRoutes = router;