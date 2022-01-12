function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let juros = capitalInicial * taxaDeJuros * tempoDeAplicacao;
    return (juros + capitalInicial).toFixed(2);
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    let juros = capitalInicial * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);
    return juros.toFixed(2);
}

console.log(jurosSimples(1000, 0.1, 10));
console.log(jurosCompostos(1000, 0.1, 10));