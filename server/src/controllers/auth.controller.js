import userModel from '../models/user.model.js'
import { hashPassword, verifyRefreshToken } from '../utils/auth.utils.js';
import { generateTokens } from '../utils/auth.utils.js';
import bcrypt from 'bcryptjs';

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
    password:await hashPassword(password),
    role

})

const {accessToken,refreshToken}=generateTokens({id:user._id,role:user.role});

res.cookie("refreshToken",refreshToken,{
    httpOnly:true
})

await userModel.findByIdAndUpdate(user._id,{refreshToken});

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

export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    

const user= await userModel.findOne({email});
if(!user){
    return res.status(400).json({
        message:"Invalid email or password"
    })
}

const isPasswordCorrect= await bcrypt.compare(password,user.password)

if(!isPasswordCorrect){
    return res.status(400).json({
        message:"Invalid email or password"
    })
}

const {accessToken,refreshToken}= generateTokens({id:user._id,role:user.role});
await userModel.findByIdAndUpdate(user._id,{refreshToken})

res.cookie("refreshToken",refreshToken,{
    httpOnly:true
})


res.status(200).json({
    message:"User found",
    data:{
        user:{
            name:user.name,
            email:user.email
        },
        accessToken
    }
})

}

export const getUsers=async(req,res)=>{
    const users= await userModel.find({}).select("name email")
    return res.status(200).json({
        message:"Users fetched",
        data:{
            users: users.map(user=>({
                name:user.name,
                email:user.email,
                id:user._id
            }))
        }
    })

}

export const refresh=async(req,res)=>{
    const token=req.cookies.refreshToken;

    if(!token){
        return res.status(401).json({
            message:"Token not found, Invalid or expired token"
        })
    }
    try {
        let decoded= verifyRefreshToken(token);
        const {id,role}= decoded;
        const user = await userModel.findById(id);
        if(!user|| user.refreshToken!==token){
await userModel.findByIdAndUpdate(id,{
    refreshToken:null
})
return res.status(401).json({
        message:"Refresh token mismatch"
    })
        }

const {accessToken,refreshToken:newRefreshToken}= generateTokens({id,role})
res.cookie("refreshToken",newRefreshToken,{
    httpOnly:true
})
await userModel.findByIdAndUpdate(id,{
    refreshToken:newRefreshToken
})

res.status(200).json({
    message:"tokens rotated successfully",
    data:{
        user: {
                email: user.email,
                name: user.name,
                id: user._id
            },
            accessToken
    },
})


    } catch (error) {
        return res.status(401).json({
            message:"Invalid token"
        })
    }

}