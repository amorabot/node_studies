const { products } = require('./data.js')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product; //vai filtrar todas aquelas caract.
        return {id,name,image}
    })
    res.json(newProducts)
})
// UMA FORMA DINAMICA DE REFERENCIAR CONTEUDOS COM BASE NA URL (evitar hardcodar rotas para pequenas alterações)
// :productID é um parâmetro de rota, que pega o conteúdo passado naquele campo do endereço e trata aquela informação no código com aquele nome
app.get('/api/products/:productID', (req,res)=>{
    const { productID } = req.params //permite acessar productID

    const singleProduct = products.find(
        (product) => product.id === Number(productID) //acha o item no array 'product' que corresponde ao criterio e salva em single product
    )
    if(!singleProduct){ //testando por valores falsy de singleProduct, no caso, undefined
        return res.status(404).send('Product does not exist')
    }
    // console.log(singleProduct)
    res.json(singleProduct)
})

// const path = require('path')

//setup static and middleware
// app.use(express.static('./public'))

// app.get('/',(req,res)=>{ //sempre que o USUARIO requisita info do endereço(entrando nele por ex.), o server faz o seguinte:
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })
// app.get('/about',(req,res)=>{
//     res.status(200).send('About Page') //usar os status é uma boa prática. melhora a clareza e é bem direto
// })
// app.get('/contact',(req,res)=>{
//     res.status(200).send('Contact Page') 
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>resourse not found</h1>')
// })