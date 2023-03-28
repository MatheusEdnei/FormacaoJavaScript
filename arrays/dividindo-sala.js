const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
]

const salaUm = alunos.slice(0, alunos.length/2)
const salaDois = alunos.slice(alunos.length/2, alunos.length)
// const salaDois = alunos.slice(alunos.length/2) --> funciona também

console.log(salaUm)
console.log(salaDois)