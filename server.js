const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongo://localhost:27017/Mern_Starter').then(() => {
    console.log('DB Conneceted....')
}).catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('hello')
})

const PORT = process.env.PORT || 5000;

const app.listen(PORT, () => console.log(`Server running on port ${PORT}`))