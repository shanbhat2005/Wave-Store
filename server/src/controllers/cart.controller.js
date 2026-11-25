import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";


export const addToCart=async(req,res)=>{
const {productId,quantity}= req.body;

const product= await productModel.findById(productId);

if(!product){
    return res.status(404).json({
        message:"product not found"
    })
}

if(product.stock<quantity){
    return res.status(400).json({
        message:"Insufficient stock"
    })
}

let cart = await cartModel.findOne({user:req.user.id})
if(!cart){
    cart = await cartModel.create({ user:req.user.id})

}

const productInCart= cart.products.find((item)=>{
    return item.product.toString()=== productId;
})

if(productInCart){
    if((productInCart.quantity+quantity)>product.stock){
        return res.status(400).json({
            message:"Insufficient stock"
        })
    }

await cartModel.updateOne({
    user:req.user.id,
    "products.product":productId,

},{
    $inc:{
        "products.$.quantity":quantity
    }
})

return res.status(200).json({
    message:"product quantity updated in cart "
})


}

await cartModel.updateOne({user:req.user.id},{
    $push:{
        products:{
            product:productId,
            quantity:quantity
        }
    }
})

return res.status(200).json({
    message:"Product added to cart"
})


}


export const getCart=async(req,res)=>{
    let cart = await cartModel.findOne({ user: req.user.id }).populate("products.product","title price images stock category");

    if (!cart) {
        cart = await cartModel.create({ user: req.user.id });
    }

    return res.status(200).json({
        message:"Cart created successfully",
        data:{
            cart
        }
    })
}

export const deleteFromCart=async(req,res)=>{
    const { productId } = req.params;
    const userId = req.user.id;

    if (!productId) {
        return res.status(400).json({
            message: "Product id is required",
        });
    }

    const userCart = await cartModel.findOne({ user: userId });

    if (!userCart) {
        return res.status(404).json({
            message: "No cart was found",
        });
    }

    const result = await cartModel.updateOne(
        {
            user: userId,
            "products.product": productId,
        },
        {
            $pull: {
                products: { product: productId },
            },
        }
    );

    if (result.matchedCount === 0) {
        return res.status(404).json({
            message: "Product was not found in the cart",
        });
    }

    return res.status(200).json({
        message: "Product removed from cart",
    });

}