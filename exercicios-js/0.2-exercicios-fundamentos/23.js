function contarPalavras(string) {
    const array = string.split(' ');
    return array.length;
}

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar"));