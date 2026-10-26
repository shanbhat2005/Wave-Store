import {verifyAccessToken} from "../utils/auth.utils.js"


export const Authenticate=(req,res,next)=>{
const accessToken= req.headers.authorization?.split(" ")[1]

if(!accessToken){
    return res.status(400).json({
        message:"Access Token not found"
    })
}

try {
    const decoded= verifyAccessToken(accessToken);
    req.user=decoded;
    next()
} catch (error) {
    return res.status(401).json({
        message:"Invalid or expired access token"
    })
}

}

export const authenticateSeller=(req,res,next)=>{
    if(req.user?.role==="seller"){
        return next()
    }
    return res.status(403).json({
        message:"Unauthorized, Access Denied "
    })
}
