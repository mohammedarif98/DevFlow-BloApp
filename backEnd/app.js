
import express from "express";
import cookieParser  from "cookie-parser";
import cors from "cors";

const app = express();

// app.use(cors(*));
// app.use(cookieParser());
// app.use(express.json({limit: "15kb"}));        //------- Middleware to parse JSON requests with a limit ----- ---


app.get("/",async(req,res)=>{
    res.json({ "username":"mohammed arif","Email": "arifcsidhik@gamil.com" })
})

export default app;