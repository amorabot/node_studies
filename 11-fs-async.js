const { readFile, writeFile } = require('fs');
//função callback: terminou o que era suposto, ela faz algo

console.log('start');//teste 1
//            path             encoding    callback
readFile('./content/first.txt', 'utf8' , (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result //leu o primeiro arquivo sem problemas e guardou o resultado em "first"
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result//leu o segundo, em seguida, e guardou em "second"
        //agora vamos passar o que foi lido para um arquivo aparte
        writeFile( //passamos o conteúdo e a callback a ser executada
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')//teste 2
            }
        )
    })
})
console.log('starting next task')//teste 3

//o que a sequência no console quer dizer é: ao começar de forma async, ele começa o processo
//e continua ele em segundo plano, (começa proxima task) e, quando termina, avisa que terminou. 