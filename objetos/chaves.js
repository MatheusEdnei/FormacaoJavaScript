const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11 555555550', '11 44444 4440']
}

const chavesCliente = Object.keys(cliente)

if (! chavesCliente.includes('enderecos')) {
    console.log('Erro. É necessário ter um endereço cadastrado')
}