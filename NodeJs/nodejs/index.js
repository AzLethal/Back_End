import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo inexistente'));
}

//promises with "then"
/*
function pegaArquivo(path) {
    const encoding = 'utf-8';
    fs.promises.readFile(path, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(erro => trataErro(erro));
}
*/

//promises with "async e await"
async function pegaArquivo(path) {
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(path, encoding);
        console.log(chalk.green(texto));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellowBright(`Operação Concluída!`));
    }
}

// function pegaArquivo(path) {
//     const encoding = 'utf-8';
//     fs.readFile(path, encoding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.greenBright(texto));
//     })
// }

pegaArquivo('./arquivos/texto1.md');