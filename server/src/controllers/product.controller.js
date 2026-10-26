import productModel from "../models/product.model.js";
import { uploadFiles } from "../services/storage.service.js";

export const createProduct = async (req, res) => {
  try {
    const { title, category, description, price, stock } = req.body;

    const uploadedImages = [];
    for (let i = 0; i < req.files.length; i++) {
      const response = await uploadFiles({
        buffer: req.files[i].buffer,
        fileName: req.files[i].originalname,
      });
      console.log(response);
      uploadedImages.push({ url: response.url, fileId: response.fileId });
    }

    // console.log(req.files);
    const product = await productModel.create({
      title,
      category,
      description,
      price,
      stock,
      images: uploadedImages,
      seller: req.user.id,
    });
    res.status(201).json({
      message: "product created",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.status(200).json({
      message: "products fetched",
      data: {
        products,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "products not found or empty",
    });
  }
};

export const getProduct=async(req,res)=>{
  const {id}= req.params;

  const product= await productModel.findById(id);
  if(!product){
    return res.status(404).json({
      message:"Product not found"
    })
  }

  return res.status(200).json({
    message:"product found successfully",
    data:{
      product
    }
  })
}