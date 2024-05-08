const express = require('express');
const app = express();

const nilai = {
    matematika : '96',
    ipa : '90',
    informatika : '100'
}

app.get('/',(req,res)=> {
    res.json(nilai);
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log("server sedang berjalan di port : ${PORT}");
});