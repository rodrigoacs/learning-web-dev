function funcaoUm(vetor, inteiro) {
    let vetorRetorno = [];
    for (let i = 0; i < vetor.length; i++) {
        vetorRetorno[i] = vetor[i] * inteiro;
    }
    return vetorRetorno;
}

function funcaoDois(vetor, inteiro) {
    let vetorRetorno = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            vetorRetorno[i] = vetor[i] * inteiro;
        } else {
            vetorRetorno[i] = vetor[i];
        }
    }
    return vetorRetorno;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20];
console.log(funcaoUm(numeros, 5));
console.log(funcaoDois(numeros, 5));