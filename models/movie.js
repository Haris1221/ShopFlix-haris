const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema ({
        name: String,
        release_date:Date,
        genre:[] ,
        rating: Number,
        description: String,
        poster_path: String,
        backdrop_path: String,
        original_language: String,
        popularity:Number,
        price: {
        type: Number,
        default:100
    }
}, {
    timestamps: false
})




module.exports = mongoose.model('Movie', movieSchema);