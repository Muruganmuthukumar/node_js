var express=require("express")
var router=express.Router()

router.get("/get",(req,res)=>{
    res.send("welcome to his world")
})
router.post("/post",(req,res)=>{
    res.send("Post Method")
})
router.delete("/delete",(req,res)=>{
    res.send("Delete Method")
})
router.patch("/patch",(req,res)=>{
    res.send("Patch Method")
}) 
module.exports=router