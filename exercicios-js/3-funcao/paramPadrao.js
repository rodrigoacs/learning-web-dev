// estratégia 1
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log(soma(), soma(1, 2), soma(1, 2, 3), soma(0, 0, 0));

// estratégia 2
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 /*trocar por indice do parametro*/ in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; //versão mais segura caso o navegador não aceite ES2015
    return a + b + c;
}
console.log(soma2(), soma2(1, 2), soma2(1, 2, 3), soma2(0, 0, 0));

//valor padrão ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
console.log(soma3(), soma3(1, 2), soma3(1, 2, 3), soma3(0, 0, 0));