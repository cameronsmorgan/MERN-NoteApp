import express from "express";

//const express = require("express");    --> means the same as above just the commonJS syntax that is changed to module in the package.json

const app = express();

app.get("/api/notes", (req, res)=>{
    res.status(200).send("You have 30 notes");
})

app.post("/api/notes", (req, res) =>{
    res.status(201).json({message:"Note created successfully!"})
})

app.put("/api/notes/:id", (req, res)=>{
    res.status(200).json({message:"Note updated successfully!"})
})

app.delete("/api/notes/:id",(req, res) =>{
    res.status(200).json({message:"Note deleted successfuly!"})
})

app.listen(5001, () =>{
    console.log("Server started on PORT:5001");
})