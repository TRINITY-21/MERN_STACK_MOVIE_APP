const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('./model/User');
const config = require('./config/key');
const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());

//DB
mongoose.connect(config.mongoURI, { useNewUrlParser: true } ).then(() => {
    console.log('DB Conneceted....')
}).catch(err => console.log(err));

//Routes

app.get('/', (req, res)=>{
    res.send('kj')
})

app.post('/api/register', (req, res) => {
    
        const user =  new User(req.body);
        user.save((err, data) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json({
                success: true,
                userData: data
            })
        })
            
    
   
})

//Ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))