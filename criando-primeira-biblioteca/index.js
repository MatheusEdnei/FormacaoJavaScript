import fs from "fs";
import chalk from "chalk";

function toExtractLinks(text) {
  const regex = /\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)/gm;
  const capture = [...text.matchAll(regex)];
  const resultados = capture.map(capture => ({[capture[1]]: capture[2]}));
}

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

getFile("./arquivos/texto.md");
