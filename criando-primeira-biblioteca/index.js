import fs from 'fs';
import chalk from 'chalk';

// dont work with arrow function, why?
function getFile(pathFile) {
    const encoding = 'utf-8';
    fs.readFile(pathFile, encoding, (_, text) => {
        console.log(chalk.green(text));
    });
}

getFile('./arquivos/texto.md');