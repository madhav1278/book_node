const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7000;

const db=require('./db');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:true
}))


app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.redirect('index.html');
    }).listen(7000)

const bookrouter= require('./routes/bookroutes');
app.use('/book',bookrouter);

// app.get("/",(req,res) => {
//     res.set({
//         "Allow-acces-Allow-Origin":'*'
//     })
//     return res.redirect('index.html')
//   }).listen(7000);


// app.listen(port, () => {
//     console.log(`Connected to the Server`);
// });
