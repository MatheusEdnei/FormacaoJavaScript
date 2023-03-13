import User from './User.js'

class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante (estudante, curso) {
        return `estudante ${estudante} passou no curso de ${curso}.`
    }
}

const docente = new Docente ('Mariana', 'm@m.com', '2021-01-01')
console.log(docente.aprovaEstudante('Jose', 'Historia'));