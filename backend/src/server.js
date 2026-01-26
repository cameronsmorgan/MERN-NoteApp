import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config();

//console.log(process.env.MONGO_URI);

//const express = require("express");    --> means the same as above just the commonJS syntax that is changed to module in the package.json

const app = express();
const port = process.env.PORT || 5001;


app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json()) // --> This middleware will parse JSON bodies: req.body
app.use(rateLimiter)



//Custom middleware
// app.use((req, res, next) =>{
//     console.log(`REQ method is: ${req.method} & REQ URL is: ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRoutes)



connectDB().then(()=>{


    app.listen(port, () =>{
    console.log("Server started on PORT:", port);
    })
})





