import express from 'express';
import {getProduct,postProduct,saveToCart,} from '../controllers/product.js';
const router=express.Router();

router.post('/',postProduct);
router.get('/',getProduct);
//router.get('/:id/saveToCart',auth,saveToCart);
//router.delete('/:id',auth,deletePost);
//router.patch('/:id',updatePost);

export default router;