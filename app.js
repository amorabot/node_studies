const express = require('express')
const app = express()
const path = require('path')

//setup static and middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{ //sempre que o USUARIO requisita info do endereço(entrando nele por ex.), o server faz o seguinte:
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
app.get('/contact',(req,res)=>{
    res.status(200).send('Contact Page') 
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resourse not found</h1>')
})


app.listen(5050, ()=>{
    console.log('server conectado com a porta 5050')
})