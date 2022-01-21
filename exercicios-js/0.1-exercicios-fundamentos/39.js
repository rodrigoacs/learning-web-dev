let vetorA = [1, 2, 3, 4, 5];
let vetorB = [6, 7, 8, 9, 10];

function trocaVetores(vetor1, vetor2) {
    for (let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }
}

trocaVetores(vetorA, vetorB);
console.log(vetorA, vetorB);