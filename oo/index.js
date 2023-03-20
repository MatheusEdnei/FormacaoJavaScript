import User from './User.js'
import Docente from './Docente.js'
import Admin from './Admin.js'

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoAdmin.criaCurso('JS', 20))


const docente = new Docente ('Mariana', 'm@m.com', '2021-01-01')
console.log(docente.aprovaEstudante('Jose', 'Historia'))

const novoUser = new User('Maria', 'm@m.com', '2021-01-01')
console.log(novoUser.exibirInfos())

// novoUser.#nome = 'Marcia'
// console.log(novoUser.nome);