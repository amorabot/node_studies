const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subfolder', 'test.txt')
//cria uma variável com o path com essas especificações e normalizado, que pode ser usado depois
console.log(filePath);

const base = path.basename(filePath);
//acessa só a ultima parte do path fornecido
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
//é interessante saber todo o caminho até aqui(__dirname) e depois especificar para onde ir (outros param.)
//isso é path absoluto, um path que será gerado independente de onde a aplicação esteja e, portanto, pode ser bem util
console.log(absolute)