import fs from "fs";
import chalk from "chalk";

function toExtractLinks(text) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capture = [...text.matchAll(regex)];
  const result = capture.map(capture => ({[capture[1]]: capture[2]}));
  return result.length !== 0 ? result : 'there are not links in the file';
}

function treatsErro(erro) {
  throw new Error(chalk.red(erro.code, " did not find the file"));
}

async function getFile(pathFile) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(pathFile, encoding);
    return toExtractLinks(text);
  } catch (erro) {
    treatsErro(erro);
  }
}

export default getFile;
