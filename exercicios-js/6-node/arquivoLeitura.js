const fs = require('fs');

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
})

// ler arquivo json direto
const config = require('./arquivo.json');
console.log(config.db);

// ler pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta');
    console.log(arquivos);
})