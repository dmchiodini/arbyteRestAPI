const express = require('express');
const routes = require('./src/routes')
const app = express();
const morgan= require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5555;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); //json de entrada no body
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})
app.use(routes);

//Quando não encontrar rota, entra aqui:
app.use((req, res, next) => {
    const err = new Error('Não encontrado');
    err.statu = 404;
    next(err);
});

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