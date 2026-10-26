import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minLength:2,
        maxLength:20
    },
    description: { 
    type: String, 
    required: true,
    minLength:20,
    maxLength:100 
  },
  price: { 
   amount:{
    type:Number,
    required:true
   },
   currency:{
    type:String,
    default:"INR"
   }
  },
  category: { 
    type: String, 
    required: true,
    enum:['Men',"Women"],
    trim: true,

  },
  stock: { 
    type: Number, 
    required: true, 
    min: 0,
    default: 0 
  },
  images: [
    {
      url: { type: String, required: true },
      fileId: { type: String, required: true } 
    }
  ],
  seller: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
},{timestamps:true})

const productModel= mongoose.model("Product",productSchema)
export default productModel;