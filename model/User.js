const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required:true
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
        required:true
    },
    password: {
        type: String,
        maxlength: 6,
        required:true
        
    },
    lastname: {
        type: String,
        required: true,
        maxlength:50

    },
    role: {
        type: Number,
        default:0
    },
    token: {
        type:String,
    },

    tokenExp: {
        type:Number
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = User;
