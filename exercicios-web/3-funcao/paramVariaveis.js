//é possível passar nenhum argumento e acessar os argumentos passados por meio do
//array arguments
function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2, 3, 4));
console.log(soma(1.1, 2.3, 'teste'));
console.log(soma('a', 'b', 'c'));