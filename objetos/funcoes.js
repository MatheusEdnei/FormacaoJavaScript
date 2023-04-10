const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11 555555550', '11 44444 4440'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log('Pagamento realizado com sucesso')
        }
    }
}
cliente.efetuaPagamento(25)