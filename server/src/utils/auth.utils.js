import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import bcrypt from 'bcryptjs'
export const generateTokens=({id,role})=>{
const accessToken=  jwt.sign({id,role},config.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
const refreshToken=  jwt.sign({id,role},config.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
return {
    accessToken,refreshToken
}
}

export const verifyAccessToken=(token)=>{
const decoded= jwt.verify(token,config.ACCESS_TOKEN_SECRET);
return decoded
}

export const verifyRefreshToken=(token)=>{
const decoded= jwt.verify(token,config.REFRESH_TOKEN_SECRET);
return decoded
}

export const hashPassword=async(password)=>{
const hashedPassword= await bcrypt.hash(password,10)
return hashedPassword
}
