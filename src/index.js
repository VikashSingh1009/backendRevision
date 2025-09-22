// dot env file 
// require('dotenv').config({path: './env'})
// ye shi approach hai but code ki consistancy ko khrab krta hai 
// 2nd dotenv approach 
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})


// iss approach use nahi krne wale but knowledge ke liye

import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

('src', 'constants.js');

connectDB()




// import express from "express";
// const app = express()
// // direct aise bhi kr sakte h but is aur bhi better bnaya jaa sakte h 
// // function connectDB(){

// // }
// // connectDB()


// // using IIFE function 
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR: ", error);
//             throw error 
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR:", error)
//         throw err 
//     }
// })()
// THIS IS THE FIRST APPRAOCH 
