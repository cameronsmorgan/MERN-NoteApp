import express from "express";

//const express = require("express");    --> means the same as above just the commonJS syntax that is changed to module in the package.json

const app = express();

app.get("/api/notes", (req, res)=>{
    res.send("You have 5 notes");
})

app.listen(5001, () =>{
    console.log("Server started on PORT:5001");
})