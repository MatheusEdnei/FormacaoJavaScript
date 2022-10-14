// Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

const numbers = [1,2,3,4];
const sumNumbers = numbers.reduce( (acum, atual) => acum += atual, 0);
console.log(sumNumbers);