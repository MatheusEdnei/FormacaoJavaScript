const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11 555555550', '11 44444 4440']
}

cliente.endereco = [{
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934'
}]

cliente.endereco.push({
    rua: 'R. Joseph Ladder',
    numero: 404,
    apartamento: false
})

const listaApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true )

// console.log(cliente)
// console.log(cliente.endereco)

console.log(listaApartamentos)