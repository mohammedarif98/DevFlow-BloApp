
import express from "express";
import cookieParser  from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import authRouter from "./routes/authRoutes.js";
import adminRouter from "./routes/adminRoutes.js"

const app = express();

// app.use(cors(*));
// app.use(cookieParser());
// app.use(express.json({limit: "15kb"}));        //------- Middleware to parse JSON requests with a limit ----- ---
app.use(logger('tiny'));



app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);


export default app; 