import express from 'express';

const app = express();

app.get('/', (req,res) =>{
    res.send('111 Hello World!');
});

app.listen(4444, (error)=>{
    if(error){
        return console.log(error);
    }
    console.log('Server OK');
});