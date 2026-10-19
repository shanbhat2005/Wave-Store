import userModel from '../models/user.model.js'
import { hashPassword } from '../utils/auth.utils.js';
import { generateTokens } from '../utils/auth.utils.js';
export const registerUser=async(req,res)=>{
const {name,email,password,role}= req.body;

const userExists= await userModel.findOne({email});

if(userExists){
    return res.status(409).json({
        message:"User already exists"
    })
}

const user= await userModel.create({
    name,
    email,
    password:hashPassword(password),
    role

})

const {accessToken,refreshToken}=generateTokens({id:user._id,role:user.role});

res.cookie("refreshToken",refreshToken,{
    httpOnly:true
})

await userModel.findByIdAndUpdate(user._id,refreshToken);

res.status(201).json({
    message:"User created successfully",
    data:{
        user: {
                email: user.email,
                name: user.name,
                id: user._id
            },
            accessToken
    },
})





}