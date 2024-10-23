import transporter from "./email.js";



const sendMail = async( to, subject, html) => {
    const mailOptions = {
        from: `"devFlow" <${process.env.EMAIL_ID}>`,
        // from: `"devFlow" <arifcs532@gmail.com>`,
        to,
        subject,
        html,
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}: ${subject}`);
    } catch (error) {
        console.error(`Error sending email to ${to}:`, error.message);
        throw new Error(`Failed to send email: ${error.message}`);
    }
}


export default sendMail;