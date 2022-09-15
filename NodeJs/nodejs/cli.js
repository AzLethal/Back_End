//cli -> command line interface
import { pegaArquivo } from './index.js'
import chalk from 'chalk';

import { validaURLs } from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(arquivoPath) {
    const resultado = await pegaArquivo(arquivoPath[2]);
    if(caminho[3] === 'validar') {
        console.log(chalk.blue('Links Validados:'), await validaURLs(resultado));
    } else {
        console.log(chalk.greenBright('lista de links'), resultado);
    }
}

processaTexto(caminho);