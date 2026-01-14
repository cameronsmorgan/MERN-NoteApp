import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

//console.log(process.env.MONGO_URI);

//const express = require("express");    --> means the same as above just the commonJS syntax that is changed to module in the package.json

const app = express();
const port = process.env.PORT || 5001;
//console.log(port);

connectDB();

app.use("/api/notes", notesRoutes)

app.use(express.json()) // --> Middleware



app.listen(port, () =>{
    console.log("Server started on PORT:", port);
})


