require('../models/db')
var express = require("express");
var bodyParser = require('body-parser');
const router = express.Router(); //changes
const mongoose = require('mongoose')

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

const collectionModel = mongoose.model('student', Schema);

router.post('/post', async (req, res) => {

    const newEmpolyee = new collectionModel({
        name: req.body.name,
        age: req.body.age,
        nationality: req.body.nationality,
    });

    try {
        await newEmpolyee.save();
        res.status(201).json("Employee created successfully!");
    }
    catch (err) {
        res.status(500).json("Enter required data");
    }
})

// router.delete('/id/:id',(req, res)=>{
//     collectionModel.findByIdAndDelete(req.params.id).then((data)=>{
//         if(!data){
//             return res.status(404).send("Data Not Found")
//         }
//         res.send(data);
//     })
//     .catch((err)=>{
//         res.status(500).send(err);
//     })
// })

router.delete('/delete',(req, res)=>{
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

router.get("/get",(req,res)=>{
    collectionModel.find().then((data)=>{
        if(data.length!=0){
            return res.json(data)
        }
        res.status(404).json("Data not found")
    })
    .catch((err)=>{
        res.status(500).json("Server Error")
    })
})

//router.put('/put',(req, res)=>{
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

router.put('/put/:id',(req, res)=>{
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

module.exports=router
