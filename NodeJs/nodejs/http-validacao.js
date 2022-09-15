import fetch from 'node-fetch';

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    //promisses asyn await
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
        }));
        return arrayStatus;
    } catch(erro) {
        manejaErros(erro);
    }
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objetoLinks => Object.values(objetoLinks).join());
}


export async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultado = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }));

    return resultado;
}

