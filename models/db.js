// require("./stu.model")
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://127.0.0.1:27017/student')
    .then(() => {
    console.log("Connected to MongoDb");
    }).catch((err) => {
        console.log(err);
    })
// module.exports.default
//mail file for all models
// all model files shoudl be imported here
// and then we can use all models by import this db.js only