const clientes = require('./clientes.json')

const filtrarApartamentosSemComplementos = (clientes) => {
    return clientes.filter((cliente) => 
    cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
}

const filtrados = filtrarApartamentosSemComplementos(clientes)

console.log(filtrados)