import express from 'express'
import { createProduct, getProducts } from '../controllers/product.controller.js'
import multer from 'multer'
import { Authenticate, authenticateSeller } from '../middleware/auth.middleware.js'
import { validateRequest } from '../validators/validate-request.js'
import { createProductValidator } from '../validators/product.validator.js'
import { getProduct } from '../controllers/product.controller.js'
const upload= multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:1*1024*1024,
        files:4
    }
});


const router= express.Router()

router.post("/",Authenticate,authenticateSeller,upload.array('images',4),(req,res,next)=>{
    try {
        if (req.body.price) req.body.price=JSON.parse(req.body.price)
        next()
    } catch (error) {
        return res.status(400).json({message:"Invalid price JSON"})
    }
},createProductValidator,validateRequest,createProduct);
router.get("/",getProducts);
router.get("/:id",getProduct)

export default router