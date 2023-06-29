const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema ({
    title: {type:String, require:true}, 
    category: String, 
    description: String,
    price: Number, 
    posterImg:String,
    backdropImg: String,
    genre:[],
    language:String,
    vote:Number,
    release_date:Date
}, {
    timestamps: true
})




module.exports = mongoose.model('Item', itemSchema);