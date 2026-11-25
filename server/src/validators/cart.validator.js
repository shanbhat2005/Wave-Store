
import {body,validationResult} from 'express-validator'

export const cartValidator=[
    body("productId")
    .exists().withMessage("product id is required").bail()
    .isString().withMessage("product id should be a string").bail()
    .isMongoId().withMessage("product id should be a mongoose id"),

    body("quantity")
    .exists().withMessage("Quantity is required").bail()
    .isInt({min:1}).withMessage("Quantity must be an integer greater than 0"),

    (req,res,next)=>{
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"cart validation failed",
                errors:errors.array()
            })
        }
        next();
    }
]