function inverteValor(valor) {
    if (typeof valor == typeof true) {
        return !valor;
    }
    if (typeof valor == typeof 1) {
        return valor * -1;
    }
    return `booleano ou número esperado, mas o parâmetro é do tipo ${typeof valor}`;
}

console.log(inverteValor(true));
console.log(inverteValor("6"));
console.log(inverteValor(-2000));
console.log(inverteValor("programação"));