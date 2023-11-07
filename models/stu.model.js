var mongoose = require('mongoose');


const Schema = mongoose.Schema({

    regno: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mark: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
})

const collectionModel = mongoose.model('personal', Schema);

module.exports=collectionModel;