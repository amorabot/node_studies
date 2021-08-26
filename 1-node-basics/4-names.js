//local var.
const secret = 'SUPER SECRET'
// shared var.
const john = 'john'
const peter = 'peter'

// console.log(module)

module.exports = { john, peter } //module está sempre disponível e refere ao arquivo// .exports é o método para poder exportar esse objeto
                                //de modo que ele possa ser visto por outros arquivos// para o que vai ser passado, podem ser objetos contendo var., por exemplo.
                                //só são passados dessa forma pois são vários, é possivel colocar só o igual para 1 unico objeto.