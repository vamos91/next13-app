//db.js

const mongoose = require('mongoose')

const url = "mongodb+srv://nicolacapsule:starcraft91@cluster0.12cob.mongodb.net/netflix?retryWrites=true&w=majority";

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })