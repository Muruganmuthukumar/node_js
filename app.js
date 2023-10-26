// var express=require("express")
// var app=express()
// var things=require('./router')
// app.use("/",things)

// app.listen(3000)

// var express=require("express")
// var app=express()
// app.get("/:id([0-9]{2})/:name([A-Z]{5})",(req,res)=>{
//     res.send(`User Name: ${req.params.name} \n UserId: ${req.params.id}`)
// })

// app.listen(3000)


var express=require("express")
var app=express()

// app.get('/',(req,res)=>{
//     res.send('Root')
// })
// app.get('/about',(req,res)=>{
//     res.send('about')
// })

// app.get('/home',(req,res)=>{
//     res.send('home')
// })

// app.get('/products',(req,res)=>{
//     res.send('products')
// })



// middleware

// const auth = (req,res,next)=>{
//     const username = req.params.username;
//     const password = req.params.password;
//     if(username==="admin"&&password=="admin"){
//         // res.send("Valid User");
//         console.log("middleware");
//         console.log("Before next method");
//         next();
//     }
//     else{
//         res.send("invalid user");
//     }
// }

// app.get('/:username/:password',auth,(req,res)=>{
    //     res.send(`valid User...Home Page`);
//     console.log("After next method");
// })

// app.get('*',(req,res)=>{
//     res.send('404 Page Not Found!');
// })


var express=require("express")
var app=express()

app.set('view engine', 'pug'); // we can use pug for dynamic contents in front end
app.set('views','./views');

// app.get('/',(req,res)=>{
//     res.render('first');
// })

// app.get('/',(req,res)=>{
//     res.render('HelloWorld',{ //parsing dynamic values
//         url:"https://www.google.co.in/",
//         name:"Murugan Muthukumar"
//     });
// })

// app.get('/dynamic',(req,res)=>{
//     res.render('dynamic',{ //If Conditions
//         age:20,
//     });
// })

// app.get('/dynamic',(req,res)=>{
    //     res.render('content',{ //Static Component For All Pages
    //         age:20
//     });
// })

const path = require('path')
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('first');
})


app.listen(3000)











