const express=require('express')

const app=express()

app.use(express.json())

app.get('/say',async (req,res)=>
{
    res.json({message:"Hello Sherin"})
})

app.get('/',async (req,res)=>
{
    res.json({message:"Wow this works"})
})

app.listen(8080)