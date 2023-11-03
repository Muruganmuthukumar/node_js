var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect('mongodb://127.0.0.1:27017/employee')
    .then(() => {
    console.log("Connected to MongoDb");
    }).catch((err) => {
        console.log(err);
    })

const Schema = mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true,
    // },
    // age:{
    //     type:Number,
    //     required:true,
    // },
    // nationality:{
    //     type:String,
    //     required:true
    // },

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
    }
})

const collectionModel = mongoose.model('personal', Schema);

// app.post('/post', async (req, res) => {

//     const newEmpolyee = new collectionModel({
//         name: req.body.name,
//         age: req.body.age,
//         nationality: req.body.nationality,
//     })

//     try {
//         await newEmpolyee.save();
//         res.status(201).json("Employee created successfully!");
//     }
//     catch (err) {
//         res.status(500).json("Enter required data");
//     }
// })

app.delete('/id/:id',(req, res)=>{
    collectionModel.findByIdAndDelete(req.params.id).then((data)=>{
        if(!data){
            return res.status(404).send("Data Not Found")
        }
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
})

app.delete('/delete',(req, res)=>{
    collectionModel.deleteOne({"name":req.body.name}).then((data)=>{
        if(data.length!=0){
            console.log(data);
            return res.json("Deleted Succesfully!")
        }
        res.status(404).json("Data not found");
    }).catch((err)=>{
        res.status(500).json("Server Error");
    })
})

// app.get("/get",(req,res)=>{
//     collectionModel.find({"name":{$eq:"Kumar"}}).then((data)=>{
//         if(data.length!=0){
//             return res.json(data)
//         }
//         res.status(404).json("Data not found")
//     })
//     .catch((err)=>{
//         res.status(500).json("Server Error")
//     })
// })

// app.put('/put',(req, res)=>{
//     collectionModel.updateOne({name:"Kumar"},{$set:{name:req.body.name}}).then((data)=>{
//         if(data.length!=0){
//             console.log(data);
//             return res.send("updated Succesfully!")
//         }
//         res.status(404).send("Data not found");
//     }).catch((err)=>{
//         res.status(500).send("Server Error");
//     })
// })

app.put('/put/:id',(req, res)=>{
    collectionModel.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false})
    .then((data)=>{
        if(data.length!=0){
            console.log(data);
            return res.send("updated Succesfully!")
        }
        res.status(404).send("Data not found");
    }).catch((err)=>{
        res.status(500).send("Server Error");
    })
})

app.listen(3000)
