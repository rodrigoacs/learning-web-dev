function criaProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criaProduto('salgado', 1.99));
console.log(criaProduto('doce', .99));