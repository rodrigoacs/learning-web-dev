function paresEImpares(vetor) {
    let par = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (Number.isInteger(vetor[i] / 2)) {
            par++;
        }
    }
    console.log(`${par} são pares e ${vetor.length - par} são impares`);
    return;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20];
paresEImpares(numeros);
