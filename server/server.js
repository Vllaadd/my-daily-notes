const express = require('express');
const mongoose = require('mongoose');
// const Notes = require('./models/Notes');

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


app.listen(3000, () => console.log('Server started on port 3000'));