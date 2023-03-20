export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    #sobrenome

    constructor( nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
        this.#sobrenome = sobrenome
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email () {
        return this.#email
    }

    get nascimento () {
        return this.#nascimento
    }

    get role () {
        return this.#role
    }

    get ativo () {
        return this.#ativo
    }

    set nome (nome) {
        if (nome === '') throw new Error('formato inválido')
        let [novoNome, ...sobrenome] = nome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = novoNome
        this.#sobrenome = sobrenome
    }

    set email (email) {
        this.#email = email
    }

    set nascimento (nascimento) {
        this.#nascimento = nascimento
    }

    set role (role) {
        this.#role = role
    }

    set ativo (ativo) {
        this.#ativo = ativo
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento},${this.role}, ${this.ativo}`
    }
}
