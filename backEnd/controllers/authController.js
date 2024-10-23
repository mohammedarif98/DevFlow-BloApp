import { catchAsync } from "../error/catchAsync.js";
import User from "../models/userModel.js";
import OTP from "../models/otpModel.js";
import AppError from "../utils/appError.js";
import { generateOTP } from "../utils/generateOTP.js";
import sendMail from "../utils/sendEmail.js";



export const registerUser = catchAsync(async (req, res, next) => {
    const { username,email,password,confirmPassword } = req.body;

    if( !username || !email || !password || !confirmPassword )  return next(new AppError("Fill all fields", 400));
    if( password !== confirmPassword ) return next(new AppError("Passwords do not match",400));

    const existUser = await User.findOne({ email });
    if( existUser ) return next(new AppError("User is already exist",400));

    const otp = generateOTP();
    const otpExpires = Date.now() + 5 * 60 * 1000;          // otp expires after 5 min

    const user = new User({
        username,
        email,
        password,
        confirmPassword
    });
    await user.save();

    await OTP.create({
        userId: user._id,
        otp,
        otpExpires,
    });

    await sendMail( email, 'OTP For Email Verification', `<h1>Your OTP is: ${otp}</h1>`);

    return res.status(201).json({
        status: 'success',
        message: 'User registered. OTP sent to email',
    });
});



