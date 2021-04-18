import express from 'express';
import {getProduct,postProduct} from '../controllers/product.js';
const router=express.Router();

router.post('/',postProduct);
router.get('/',getProduct);

export default router;