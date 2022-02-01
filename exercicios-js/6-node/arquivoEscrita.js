const fs = require('fs');

const produto = {
    nome: 'Celular',
    marca: 'Motorola',
    preco: 1244.99,
    desconto: 0.15
};

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo');
});