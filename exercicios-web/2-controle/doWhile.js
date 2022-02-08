function intAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
let contador = 0;

do {
    opcao = intAleatorio(-1, 10);
    console.log(opcao);
    contador++;
} while (opcao != -1)

console.log(`foram gerados ${contador} numeros`);