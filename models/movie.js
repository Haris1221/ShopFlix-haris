const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
    },
    cast: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Movie', movieSchema);