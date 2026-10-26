import express from 'express'
import { Authenticate } from '../middleware/auth.middleware.js'
import { getUsers, loginUser, registerUser } from '../controllers/auth.controller.js'
import { validateRequest } from '../validators/validate-request.js'
import { loginUserValidator, registerUserValidator } from '../validators/user.validator.js'
const router= express.Router()

router.post("/",registerUserValidator,validateRequest,registerUser)
router.get("/",loginUserValidator,validateRequest,loginUser)
router.get("/allUsers",Authenticate,getUsers)

export default router;
