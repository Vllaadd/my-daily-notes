const express = require('express');
const mongoose = require('mongoose');
const Notes = require('./models/Notes');

//MIDDLEWARE
const app = express();
app.use(express.json());
app.use(express.static('public'));

//MONGO DATABASE
mongoose.connect('mongodb+srv://vladzizic:IWKhFXpvCEkmaAWt@cluster0.7jw4ap3.mongodb.net/?retryWrites=true&w=majority', {
    // userNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => console.log('Connected to DB'))
.catch(console.error);

//ROUTES
app.get('/home', async(req, res) => {
    try{
        const allNotes = await Notes.find();
        res.status(200).json(allNotes);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

app.post('/newnote', async(req, res)=>{
    const { tags, note } = req.body;
    try{
        const newNote = new Notes({
            tags,
            note,
        });

        await newNote.save();

        res.status(201).json({message: 'Note saved successfully'});
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Intenral Server Error'});
    }
})


app.listen(3001, () => console.log('Server started on port 3001'));