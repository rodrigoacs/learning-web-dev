const pessoa = {
    nome: 'rodrigo',
    idade: '19',
    endereco: {
        logradouro: 'rua são luiz',
        numero: 109,
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);


const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);