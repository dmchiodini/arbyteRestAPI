const express = require('express')
const routes = require('./src/routes')
const app = express()
const port = process.env.PORT || 3009
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
app.use(cors())

app.use(routes)

app.listen(port, (err) => {
    if (err) {
        console.log('Deu ruim', err)
    } else {
        console.log('Servidor rodando, porta: ', port)
    }
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            menssagem: error.message
        }
    })
})