import axios from "axios"

export const getProductsApi=async(category)=>{
try {
    const response= await axios.get("http://localhost:3000/api/products/",{
        params:category? {category}:{}
    })
   
    return response.data.data.products;
} catch (error) {
    console.log("error",error);
    
}
}