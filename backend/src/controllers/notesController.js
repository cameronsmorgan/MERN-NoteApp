import Note from "../../models/Note.js";

export async function getAllNotes(req, res) {
    try{
        const notes = await Note.find().sort({createdAt: -1})
        res.status(200).json(notes);
    } catch (error){
        console.error("Error in getAllNotes Controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function getNoteByID(req, res){
    try{
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).json({message:"NOTE NOT FOUND"})
        }else{
            res.json(note)
        }

    } catch(error){
        console.error("Error in getNoteByID Controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function updateNotes(req, res){
    try{
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true})
        if(!updatedNote){
            return res.status(404).json({message:"NOTE NOT FOUND"})
        }
        res.status(200).json({message:"NOTE UPDATED SUCCESSFULLY"})
    } catch(error){
        console.error("Error in updateNotes Controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function createNote(req, res) {
    try{
        const {title, content} = req.body
        const note = new Note({title, content})

        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error){
        console.error("Error in createNote controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function deleteNote(req, res) {
    try{
        
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deleteNote){
            return res.status(404).json({message:"NOTE NOT FOUND"})
        }

        res.status(200).json({message:"NOTE DELETED SUCCESSFULLY"})
    } catch(error){
        console.error("Error in deleteNote controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}
