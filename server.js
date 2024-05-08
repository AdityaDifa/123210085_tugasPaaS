const express = require('express');
const app = express();

const profile = {
    nama : 'Aditya Difa',
    nim : '123210085',
}

app.get('/',(req,res)=> {
    res.json(profile);
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log("server sedang berjalan di port : ${PORT}");
});