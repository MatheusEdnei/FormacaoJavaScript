const clientes = require('./clientes.json')

const encontrar = (lista, chave, valor) => {
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrar(clientes, 'nome', 'Kirby')
console.log(encontrado)