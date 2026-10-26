import razorpayInstance from "../config/razorpay.js";
import productModel from '../models/product.model.js';
import paymentModel from '../models/payment.model.js';


export const createOrder=async(req,res)=>{
const productId = req.params.id;
const product= await productModel.findById(productId);

if(!product){
    return res.status(404).json({
        message:"product not found or order already created"
    })
}

const order= await razorpayInstance.orders.create({
    amount:product.price.amount*100,
    currency:product.price.currency,
    receipt:`rcpt_${productId}`,
    notes:{
        productId:productId,
        productName:product.title,
    }

})

const payment=await paymentModel.create({
    orderId:order.id,
    productId:productId,
    currency:order.currency,
    amount:order.amount,
    status:"pending"

})

return res.status(201).json(payment)





}