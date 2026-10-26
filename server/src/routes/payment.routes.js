import express from 'express'
import { createOrder } from '../controllers/payment.controller.js';

const router= express.Router();

router.post("/:id/order",createOrder)


export default router;