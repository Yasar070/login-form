const express=require("express")
const data=express()
const cors=require('cors')
data.use(cors())
let user="Kenndy"
let pass=123


data.use(express.json())
data.use(express.urlencoded({extended:true}))
data.post("/login",function(req,res){
    console.log("Login successful");
    
    if(req.body.username===user && Number(req.body.password)===pass)
        {
            res.send(true)
        }
        else{
            res.send(false)
        }
})



data.listen(5000,function(){
    console.log("Server started");
    
})