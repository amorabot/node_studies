const express = require('express')
const app = express()
const logger = require('./logger.js')

// app.get('/', logger, (req,res)=>{ EXEMPLO DE USO DE MIDDLEWARE, SELECIONANDO MANUALMENTE QUAL ROTA USARÁ
//     res.send('Home')
// })

app.use(logger) //no lugar de adicionar logger como middleware em todas as rotas manualmente, peço que o app use logger em todas as rotas, poupando trabalho
// o middleware passado só se aplica às rotas definidas abaixo do app.use dele

app.get('/', (req,res)=>{
    res.send('Home')
})
app.get('/about', (req,res)=>{
    res.send('About')
})
app.get('/api/products', (req,res)=>{
    res.send('Products')
})
app.get('/api/items', (req,res)=>{
    res.send('Items')
})

app.listen(5050, ()=>{
    console.log('server conectado com a porta 5050')
})