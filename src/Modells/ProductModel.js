const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    PackegeSize : {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        trim: true
    },

    Category : {
        type: String,
        required: true
    },


    Status : {
        type: String,
        required: true,
        trim: true
    },

    MRP: { 
        type: Number,
        required: true,
        trim: true
    },

    currencyId: { //INR
        type: String,
        required: true,
        trim: true
    },

    currencyFormat: { //Rupee symbol
        type: String,
        required: true,
        trim: true
    },

    productImage: { // s3 link
        type: String,
        required: true,
        trim: true
    },

},
    { timestamps: true }
)   
module.exports = mongoose.model('product', productSchema)