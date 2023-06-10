
const mongoose = require('mongoose');//import mongoose from mongoose


//create schema
const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true, // Optional, enables automatic generation of unique identifiers
      }
})
//create model and exports module

module.exports = mongoose.model('subscribers',susbcriberSchema);