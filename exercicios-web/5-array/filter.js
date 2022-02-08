const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 4999, fragil: true },
    { nome: 'copo de vidro', preco: 12.50, fragil: true },
    { nome: 'copo de plástico', preco: 1.99, fragil: false }
];

console.log(produtos.filter(function (p) {
    return p.preco > 1000;
}));
console.log(produtos.filter(function (p) {
    return p.fragil != false;
}));

const caros = e => e.preco > 500;
const frageis = e => e.fragil;

console.log(produtos.filter(frageis).filter(caros));