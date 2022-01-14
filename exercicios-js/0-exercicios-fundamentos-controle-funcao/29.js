const numeros = [1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20];
let noIntervalo = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 10 && numeros[i] <= 20) {
        noIntervalo++;
    }
}
console.log(`há ${noIntervalo} números no intervalo e ${numeros.length - noIntervalo} fora`);
