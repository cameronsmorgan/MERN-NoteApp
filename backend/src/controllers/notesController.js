// function getAllNotes(req, res) {
//     res.status(200).send("You have fetched the notes")
// }  -->SAME AS BELOW

export const getAllNotes = (req, res) =>{
    res.status(200).send("You have fetched the notes")
}

export const updateNotes = (req, res) =>{
    res.status(200).send("Notes updated successfully!")
}

export const createNote = (req, res) =>{
    res.status(201).send("Notes created successfully!")
}

export const deleteNote = (req, res) =>{
    res.status(200).send("Notes deleted successfully")
}
