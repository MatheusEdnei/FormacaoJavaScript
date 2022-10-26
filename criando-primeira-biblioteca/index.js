import fs from 'fs';
import chalk from 'chalk';

function treatsErro(erro) {
    throw new Error(chalk.red(erro.code, ' did not find the file'));
}

// dont work with arrow function, why?
function getFile(pathFile) {
    const encoding = 'utf-8';
    fs.readFile(pathFile, encoding, (erro, text) => {
        if (erro) {
            treatsErro(erro);
        }

        console.log(chalk.green(text));
    });
}

getFile('./arquivos/texto.md');