//a ideia do parametro next é: sempre que chamarmos um middleware pra executar funcionalidade, a menos que a res ja vá ser enviada, um proximo mid. tem que ser indicado
const logger = (req,res, next)=>{ //DEFINIÇÃO DE UMA FUNÇÃO MIDDLEWARE, USADA DA FORMA: req => middleware => res
    const method = req.method //devolve o método usado nesse request (GET)
    const url = req.url //devolve a rota tratada nessa função
    const time = new Date().getFullYear() //devolve o ano atual
    console.log(method,url,time) //devolve as informações sempre que houver uma requisição do usuario para a rota
    //se eu mandasse um res.send aqui, num next não seria necessário
    next()
}

module.exports = logger