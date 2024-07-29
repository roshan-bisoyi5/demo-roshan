


const express=require('express')
const app=express();


app.get('/',function(req,res){n
    res.send("hello welcome to our shop")
})
app.get('/chicken',(req,res)=>{
    res.send("hello i want searve to chicken")
})

app.listen(6007)