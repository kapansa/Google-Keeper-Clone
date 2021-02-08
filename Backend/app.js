const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin-samuel:test123@cluster0.ixhgg.mongodb.net/notesDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const notesSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model('Note', notesSchema);

app.post("/create", (req, res)=>{
    const title = req.body.title;
    const content = req.body.content;

    const note = new Note({
        title,
        content
    });

    note.save();
});

app.post("/remove/:id", (req, res) => {
    const id = req.params.id;

    Note.deleteOne({_id: id}, (req, res) => {
        console.log("item deleted");
    });
});

app.get("/notes", (req, res)=>{
    Note.find({}).then(results=> {
        res.json(results);
    });
});

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
