//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);        //5
imprimirSoma(5);           //NaN
imprimirSoma(2, 4, 6, 10); //6

//funcao com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 7)); //6
console.log(soma(2));    //0 é o valor padrão de b a função retorna 2 e ñ NaN