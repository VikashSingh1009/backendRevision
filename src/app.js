import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// app.use() middle ware configuration ke use mai aata h 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))

// data kayi jgh se aana h so setting krni pdti h best practices 
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// app.use(express.static)
app.use(cookieParser())

// routes import 
import userRouter from './routes/user.routes.js'

// routes declaration 
// app.get kyunki yahi routes likh rahe the yahi pr controller likh rahe the 

// but ab alg hoga kyunki sb alg h 
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register
export {app}