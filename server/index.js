
//2
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")


//3
dotenv.config()


//4
const {Schema} = mongoose
const newSchema = new Schema({

    name:{type:"String",require:true},
    img:{type:"String",require:true},
    price:{type:"Number",require:true}

},
{timestamps:true}

)

const Users = mongoose.model("pros",newSchema)

//5

const app  = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.send("<h1>Admin Panel</h1>")
})

//6 get all

app.get("/pros",(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

// 7 by id find 

app.get("/pros/:id",(req,res)=>{
    const {id} = req.params
    Users.findById(id,(doc,err)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }
            else{
                res.status(404).json({message:"not found"})
            }
        }
        else{
            res.status(500).json({message:err})
        }
    })
})

//8 delete

app.delete("/pros/:id",(req,res)=>{
    const {id} = req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("deleted")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//9 add 

app.post("/pros",(req,res)=>{
    const pro = new Users({
        name:req.body.name,
        img:req.body.img,
        price:req.body.price
    
    })
    pro.save()
    res.send("added")
})

//10 .env 

//11


const url = process.env.URL.replace("<password>",process.env.PASSWORD)
const port = process.env.PORT



mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
   console.log("db connect");
   app.listen(port,()=>{
    console.log("server loading");
   })
    }

})
