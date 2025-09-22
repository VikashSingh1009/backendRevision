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

app.use(express.static)
app.use(cookieParser())


export {app}