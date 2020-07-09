const express = require('express');
const routes = require('./src/routes')
const morgan= require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5555;

app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); //json de entrada no body
app.use(morgan('dev'));
app.use(cors());

app.use(routes);

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

app.listen(port, (err) => {
    if(err) return console.log(`Não startou ${err}`)
    console.log('Runing on port ', port)
})