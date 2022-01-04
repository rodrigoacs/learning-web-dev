//usar o null para "limpar" uma variável
let valor; //não inicializada
console.log(valor);

valor = null; //não aponta para nenhum endereço de memória
console.log(valor);
//console.log(valor.toString()); // erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

delete produto.preco;
console.log(produto);

produto.preco = null; //produto sem preço
console.log(produto);
