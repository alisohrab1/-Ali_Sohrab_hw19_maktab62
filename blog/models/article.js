const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleShema = new Schema({ 
    title: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})


module.exports = mongoose.model("Article", ArticleShema);