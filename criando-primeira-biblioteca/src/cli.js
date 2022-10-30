import fs from "fs";
import getFile from "./index.js";
import listValid from "./http-validation.js";

const path = process.argv;

async function printList(valid, result, identifier = "") {
  if (valid) {
    console.log("Lista validada " + identifier + " " + await listValid(result));
  } else {
    console.log("Lista validada " + identifier + " " + result);
  }
}

async function processText(args) {
  const path = args[2];
  const valid = args[3] === '--valid';

  try {
    fs.lstatSync(path);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      console.log("file or directory dont exists");
      return;
    }
  }

  if (fs.lstatSync(path).isFile()) {
    const result = await getFile(args[2]);
    printList(valid, result);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    files.forEach(async (fileName) => {
      const list = await getFile(`${path}/${fileName}`);
      printList(valid, list, fileName);
    });
  }
}

processText(path);
