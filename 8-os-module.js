const os = require('os'); //"os" é um dos módulos padrões do node e, portanto, não precisa ser instalado, apenas importado

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)