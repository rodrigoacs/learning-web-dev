Array.prototype.filter2 = function (callback) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            novoArray.push(this[i]);
        }
    }
    return novoArray;
}

const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 4999, fragil: true },
    { nome: 'copo de vidro', preco: 12.50, fragil: true },
    { nome: 'copo de plástico', preco: 1.99, fragil: false }
];


const caros = e => e.preco > 500;
const frageis = e => e.fragil;

console.log(produtos.filter(frageis).filter(caros));
console.log(produtos.filter2(frageis).filter2(caros));