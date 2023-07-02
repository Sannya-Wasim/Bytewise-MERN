const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    location : {
        type : String,
        required : true,
    },
    petName : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        required : true,
    }
})

const Report = mongoose.model('Report', reportSchema)
module.exports = Report;