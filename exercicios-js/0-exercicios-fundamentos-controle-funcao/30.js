function maiorMenor(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }
    console.log(`${maior} é o maior valor e ${menor} o menor`);
}

const numeros = [11, 59, 33, 95, 97, 24, 22, 26, 2, 16, 29, 68, 49, 67, 98, 60, 10, 23, 87, 3, 71, 5, 17, 38, 42, 27, 79, 92, 53, 41, 84, 85, 56, 82, 65, 7, 94, 62, 100, 75, 78, 77, 64, 86, 96, 8, 58, 12, 45, 37, 9, 70, 14, 91, 44, 88, 21, 13, 48, 36, 18, 83, 73, 54, 93, 80, 43, 52, 31, 74, 90, 28, 6, 39, 25, 19, 69, 81, 1, 50, 55, 57, 32, 35, 63, 61, 15, 72, 30, 20, 66, 40, 46, 51, 89, 34, 76, 47, 4, 99]
maiorMenor(numeros);