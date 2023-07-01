const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = require('./movie')

const listSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movies:[{
        type: {},
        ref: 'Movie',
        required: true
    }]
}, {
    timestamps: true
})




module.exports = mongoose.model('List', listSchema);