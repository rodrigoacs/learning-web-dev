function desempenhoPedro(pontuacoes) {
    let arrayPontos = [];
    arrayPontos = pontuacoes.split(' ');

    let retorno = [];
    retorno[0] = 0;

    let recorde = arrayPontos[0];
    let piorPontuacao = arrayPontos[0];

    for (const i in arrayPontos) {
        arrayPontos[i] = parseInt(arrayPontos[i]);
        if (arrayPontos[i] > recorde) {
            recorde = arrayPontos[i];
            retorno[0]++;
        }
        if (arrayPontos[i] < piorPontuacao) {
            piorPontuacao = arrayPontos[i];
            retorno[1] = parseInt(i) + 1;
        }
    }
    return retorno;
}

console.log(desempenhoPedro("10 20 20 8 25 3 0 30 1"));