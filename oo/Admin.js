import User from './User.js'
import { multiplica } from './teste.js'

export default class Admin extends User {
    constructor (nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criaCurso (nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

