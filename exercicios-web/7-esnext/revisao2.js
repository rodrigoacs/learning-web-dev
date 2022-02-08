// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3));

// arrow function this
const lexico1 = () => console.log(this === exports);
lexico1()

// parametro default
function log(texto = 'ola') {
    console.log(texto);
}
log()
log('tudo bem?')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n);
    return total
}
console.log(total(2, 3, 4, 5));
