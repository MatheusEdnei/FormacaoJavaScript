// Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const numbers = [1, 2, 3, 4];

// const parNumbers = numbers.filter((number) => number % 2 === 0);
// const sumParNumbers = parNumbers.reduce((acum, total) => (acum += total), 0);

const sumPares = numbers.filter((number) => number % 2 === 0).
                        reduce((previous, current) => (previous += current), 0);

console.log(sumParNumbers);