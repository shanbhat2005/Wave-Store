import API from "../../../services/axiosInstance"

export const registerApi=async(data)=>{
try {
    const response=await API.post("/auth/register",data);
    console.log(response);
    
} catch (error) {
 console.log(error);
    
}
}

export const loginApi=async(data)=>{
try {
    const response= await API.post("/auth/login",data);
console.log(response);
} catch (error) {
    console.log(error);
    
}

}