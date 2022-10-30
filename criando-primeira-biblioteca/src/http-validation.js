import fetch from "node-fetch";

function extractLinks(arrLinks) {
  return arrLinks.map((objLink) => Object.values(objLink).join());
}

async function checkStatus(listURL) {
  const arrStatus = await Promise.all(
    listURL.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;

      } catch(erro) {
        return managerErros(erro);
      }
    })
  );
  return arrStatus;
}

function managerErros(erro) {
  if(erro.cause.code === 'ENOTFOUND') {
    return 'link not found';
  } else {
    
  }
}

export default async function listValid(listLinks) {
  const links = extractLinks(listLinks);
  const status = await checkStatus(links);
  return listLinks.map((obj, index) => ({
    ...obj,
    status: status[index]
  }));
}
