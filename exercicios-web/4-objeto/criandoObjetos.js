// notação literal
const obj = {};
console.log(obj);

// Object em JS
const obj2 = new Object;
console.log(obj2);

// funcões construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => { return preco * (1 - desc) }
}
const p1 = new Produto('Caneta', 8, 0.15);
const p2 = new Produto('Caderno', 10, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}
const f1 = criarFuncionario('João', 4000, 12);
const f2 = criarFuncionario('Maria', 2000, 12);
console.log(f1.getSalario(), f2.getSalario());

// Objetct.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// função que retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJSON.info);