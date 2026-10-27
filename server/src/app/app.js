import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import authRoutes from '../routes/auth.routes.js'
import productRoutes from "../routes/products.routes.js"
import paymentRoutes from '../routes/payment.routes.js'
import morgan from 'morgan'
import config from '../config/config.js'
const app = express()
app.use(cors({
    origin: config.CLIENT_ORIGIN,
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser());
app.use(morgan("dev"));


app.use("/api/products",productRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/payments",paymentRoutes)

export default app;