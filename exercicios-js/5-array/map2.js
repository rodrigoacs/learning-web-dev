const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }',
];

// minha "solução"
const separaEspaco = e => e.split(',')[1];
const pegaPreco = e => e.split(' ')[2];

const teste = carrinho.map(separaEspaco).map(pegaPreco);
console.log(teste);

// solução do curso
const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);