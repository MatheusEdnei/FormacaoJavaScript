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

for (let chave in cliente) {
    if (typeof cliente[chave] !== 'object' && typeof cliente[chave] !== 'function') { 
        console.log(`A chave é ${chave} e o valor é ${cliente[chave]}`)
    }
}