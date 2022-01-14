function calculaAnuidade(mes, anuidade) {
    if (mes > 0 && mes < 13) {
        return anuidade * Math.pow(1 + 0.05, mes - 1);

    } else {
        return 'mês inválido';
    }
}

console.log(calculaAnuidade(12, 1000).toFixed(2));
console.log(calculaAnuidade(1, 1000).toFixed(2));
console.log(calculaAnuidade(15, 1300));



