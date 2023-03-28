const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 8, 7.5, 9]

const listaDeAlunosMedias = [alunos, medias]

function exibeNomeNota (aluno) {
    if (listaDeAlunosMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosMedias[0]
        // const media = listaDeAlunosMedias[1]

        const [alunos, media] = listaDeAlunosMedias

        const indice = alunos.indexOf(aluno)
        const mediaAluno = media[indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
        console.log('aluno não encontrado!');
    }
}

exibeNomeNota('João')