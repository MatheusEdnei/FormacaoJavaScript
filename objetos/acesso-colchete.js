const cliente = {
    nome: 'André',
    idade: 32,
    cpf: '123456789',
    email: 'jose@email.com'
}

console.log(cliente['nome'])

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})