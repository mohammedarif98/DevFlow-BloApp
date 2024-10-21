import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        lowerCase: true
    },
    role: {
        type: String,
        enum: ['user', 'author'],
        default: 'user',
    },
    profilePhoto: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        select: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },   
},
{ timestamps: true }
);



const User = mongoose.model("User",userSchema);

export default User;