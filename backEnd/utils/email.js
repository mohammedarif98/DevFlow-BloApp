import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD, 
    },
}); 


// Optional: Test the transporter
// transporter.verify((error, success) => {
//     if (error) { 
//         console.error('Transporter verification error:', error);
//     } else {
//         console.log('Transporter is ready to send emails');
//     }
// });


export default transporter;