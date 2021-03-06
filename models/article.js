const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        required: '{PATH} is required!'
    },
    subtitle :{
        type: String,
        required: '{PATH} is required!'
    },
    primary: {
        type: String,
        required: '{PATH} is required!'
    },
    secondary: {
        type: String,
        required: '{PATH} is required!'
    },
    status: {
        type: String,
        required: '{PATH} is required!'
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comments: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Comment'}
    ],
    views: {
        type: Number,
        default: 0
    }
},
{ timestamps: true }
)

const Article = mongoose.model("Article", ArticleSchema)
module.exports = Article
