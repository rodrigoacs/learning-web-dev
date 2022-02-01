const fs = require('fs');

const dados = {
    nome: 0,
    idade: 0,
    genero: 0,
};

process.stdout.write(`informe seu (nome,idade,genero)\n`)
process.stdin.on('data', data => {
    const dadosColetados = data.toString().replace('\n', '')
    dados.nome = dadosColetados.split(',')[0];
    dados.idade = dadosColetados.split(',')[1];
    dados.genero = dadosColetados.split(',')[2];
    fs.writeFile(__dirname + '/dadosUsuario.json', JSON.stringify(dados), err => {
        console.log(err || 'Dados salvos');
        process.exit();
    });
})

