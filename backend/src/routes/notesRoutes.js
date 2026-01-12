import express from "express";
import { getAllNotes } from "../controllers/notesController.js";
import { createNote } from "../controllers/notesController.js";
import { updateNotes } from "../controllers/notesController.js";
import { deleteNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes)

router.post("/", createNote)

router.put("/:id", updateNotes)

router.delete("/:id" , deleteNote)


export default router;

// app.get("/api/notes", (req, res)=>{
//     res.status(200).send("You have 30 notes");
// })

// app.post("/api/notes", (req, res) =>{
//     res.status(201).json({message:"Note created successfully!"})
// })

// app.put("/api/notes/:id", (req, res)=>{
//     res.status(200).json({message:"Note updated successfully!"})
// })

// app.delete("/api/notes/:id",(req, res) =>{
//     res.status(200).json({message:"Note deleted successfuly!"})
// })