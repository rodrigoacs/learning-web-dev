function conceitos(notas) {
    for (const i in notas) {
        if (notas[i] < 5) {
            console.log(`nota: ${notas[i]}. conceito: D`);
        } else if (notas[i] >= 5 && notas[i] < 7) {
            console.log(`nota: ${notas[i]}. conceito: C`);
        } else if (notas[i] >= 7 && notas[i] < 9) {
            console.log(`nota: ${notas[i]}. conceito: B`);
        } else {
            console.log(`nota: ${notas[i]}. conceito: A`);
        }
    }
}

let notas = [];
for (let i = 0; i < 10; i++) {
    notas[i] = parseInt(Math.random() * 10);
}
conceitos(notas);