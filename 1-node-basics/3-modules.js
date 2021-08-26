// CommonJS(é a biblioteca usada pelo Node), every file is a module (by default)
// Modules - Encapsulated Code (só dividir o mínimo necessário entre os arquivos)

//todo arquivo é um módulo, que pode importar e exportar informação pelo projeto todo
//quando for dar require, sempre começar com 1 . (mais deles)// dependendo de onde o arquivo está, seguido da / e do nome do arquivo
const names = require('./4-names') 
const sayHi = require('./5-utils')
const data = require('./6-alternativeflavor')
require('./7-mind-grenade') //se uma função é chamada em um módulo que é requirido, ela é chamada pelo require
// console.log(data)
// sayHi(`susan`)                    
// sayHi(names.john)
// sayHi(names.peter)
