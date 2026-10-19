import productModel from "../models/product.model.js";

export const createProduct=async(req,res)=>{
    try {
        const {title,category,description,price,stock,images}=req.body;
    const product= await productModel.create({
        title,
        category,
        description,
        price,stock,
        images,
        seller:req.user.id
    })
res.status(201).json({
    message:"product created",
    data:{
        product
    }
})
    } catch (error) {
  res.status(400).json({
    message:error.message
  })      
    }

}

export const getProducts=async(req,res)=>{
   try {
     const products= await productModel.find({});
  
    res.status(200).json({
        message:"products fetched",
        data:{
            products
        }
    })
   } catch (error) {
    
        return res.status(500).json({
message:"products not found or empty"
   })
   }
}