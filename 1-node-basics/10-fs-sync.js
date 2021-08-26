const { readFileSync, writeFileSync } = require('fs')
// é equivalente a pegar uma var.(fs, por exemplo) e acessar os métodos acima manualmente

console.log('start');

                       //source do arquivo acessado e o encoding usaod pra ler
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first);
// console.log(second);

//com esse método dá pra selecionar um arquivo pelo path e escrever nele, se ele não existir vai ser criado
//parametros: (path , conteúdo, (flag))
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
)
//se o processo de ler os dados acima for muito demorado, basicamente o programa para ali e não faz mais nada
//deixando o processo ineficiente, pois o node lê linha por linha e executa a próxima só ao final da anterior
console.log('done with this task');
console.log('starting the next one')