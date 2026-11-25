import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product"
            },
            quantity:{
                type:Number,
                default:1,
                min:1
            }
        }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    }
})

const cartModel=  mongoose.model("Cart",cartSchema);
export default cartModel