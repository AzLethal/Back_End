//cli -> command line interface
import { pegaArquivo } from './index.js'
import chalk from 'chalk';
import fetch from 'node-fetch';

const caminho = process.argv;

async function processaTexto(arquivoPath) {
    const resultado = await pegaArquivo(arquivoPath[2]);
    console.log(chalk.greenBright('lista de links'), resultado);
}

processaTexto(caminho);