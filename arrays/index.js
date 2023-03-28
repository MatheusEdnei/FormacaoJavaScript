// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)

const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)
