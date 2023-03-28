const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0

for (let nota of notas) {
    somaNotas += nota
}

console.log(`A media é ${somaNotas/notas.length}`);