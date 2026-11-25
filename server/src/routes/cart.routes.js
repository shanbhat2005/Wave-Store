import {Router} from 'express'
import { cartValidator } from '../validators/cart.validator.js';
import { Authenticate } from '../middleware/auth.middleware.js';
import { addToCart, deleteFromCart, getCart } from '../controllers/cart.controller.js';


const router= Router();

router.post("/",Authenticate,cartValidator,addToCart);
router.get("/",Authenticate,getCart);
router.delete("/:productId", Authenticate, deleteFromCart);

export default router
