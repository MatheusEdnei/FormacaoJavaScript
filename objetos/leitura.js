const dados = require('./cliente.json')

console.log(dados)

const clienteString = JSON.stringify(dados)

console.log(clienteString)

const objetoCliente = JSON.parse(clienteString)

console.log(objetoCliente)