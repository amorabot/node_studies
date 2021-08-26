//já seta a propriedade "items" do objeto "module.exports" para o array, que ja fica disponível
module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}
//também é possível definir o objeto a ser exportado e em seguida atribuí-lo à propriedade nova de module.exports
module.exports.singlePerson = person;
