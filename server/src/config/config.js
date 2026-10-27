import dotenv from 'dotenv'
dotenv.config()

const config={
    CLIENT_ORIGIN:process.env.CLIENT_ORIGIN || "http://localhost:5173",
    ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET,
    MONGO_URI:process.env.MONGO_URI,
    IMAGEKIT_PRIVATE_KEY:process.env.IMAGEKIT_PRIVATE_KEY,
    RAZORPAY_KEY_ID:process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET:process.env.RAZORPAY_KEY_SECRET,
    CLIENT_ORIGIN:process.env.CLIENT_ORIGIN,
}

export default config;