import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.z0bvcge.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('DB ok')).catch((error)=>console.log('DB error',error));

const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('111 Hello World!');
});

app.post('/auth/login',(req,res)=>{
    console.log(req.body);
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Aboba',
    }, 'secret123');
    res.json({
        success:true,
        token,
    });
});

app.listen(4444, (error)=>{
    if(error){
        return console.log(error);
    }
    console.log('Server OK');
});