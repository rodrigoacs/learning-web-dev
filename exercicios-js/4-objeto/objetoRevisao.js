const produto = new Object
produto.none = 'Cadeira';
produto['marca do produto'] = 'Generica'
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Rodrigo',
        idade: 18,
        endereco: {
            cidade: '',
            logradouro: 'Rua São Luiz',
            numero: 109,
        }
    },
    condutores: [
        { nome: 'Pedro', idade: 19 },
        { nome: 'Ana', idade: 18 }
    ],
    calcularValorSeguro: function () { },
}

carro.proprietario.endereco.cidade = 'Congonhas'
console.log(carro.proprietario.endereco.cidade);
carro['proprietario']['endereco']['cidade'] = 'SJDR'
console.log(carro.proprietario.endereco.cidade);