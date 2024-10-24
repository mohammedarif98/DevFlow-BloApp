import express from "express";
import { catchAsync } from "../error/catchAsync.js";
import { loginUser, registerUser, resendOTP, verifyOTP } from "../controllers/authController.js";
const router = express.Router();



router.post("/register",registerUser);
router.post("/verifyOTP",verifyOTP);
router.post('/resendOTP', resendOTP);
router.post('/login', loginUser);


router.get("/test",catchAsync(async(req,res)=>{

    const user = "arif"
    user ? res.status(200).json({status:"sucess",user}) : res.status(500).json({status:"error",message:"user not found"})
    
}));




export default router;
