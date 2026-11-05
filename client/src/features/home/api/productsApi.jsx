import axios from "axios"

export const getProductsApi=async()=>{
try {
    const response= await axios.get("http://localhost:3000/api/products/")
    return response.data.data.products;
} catch (error) {
    console.log("error",error);
    
}
}