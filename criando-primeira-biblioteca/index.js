import fs from "fs";
import chalk from "chalk";

function treatsErro(erro) {
  throw new Error(chalk.red(erro.code, " did not find the file"));
}

async function getFile(pathFile) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(pathFile, encoding);
    console.log(chalk.green(text));
  } catch (erro) {
    treatsErro(erro);
  }
}

// promises with then()
// function getFile(pathFile) {
//     const encoding = 'utf-8';
//     fs.promises.readFile(pathFile, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(treatsErro);
// }

// dont work with arrow function, why?
// function getFile(pathFile) {
//     const encoding = 'utf-8';
//     fs.readFile(pathFile, encoding, (erro, text) => {
//         if (erro) {
//             treatsErro(erro);
//         }

//         console.log(chalk.green(text));
//     });
// }

getFile("./arquivos/texto.md");
