import express from 'express'
import { Authenticate } from '../middleware/auth.middleware.js'
import { loginUser, registerUser } from '../controllers/auth.controller.js'

const router= express.Router()

router.post("/",registerUser)
router.get("/",loginUser)

export default router