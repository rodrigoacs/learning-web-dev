function calculadora(valorA, operador, valorB) {
    switch (operador) {
        case '+':
            console.log(valorA + valorB);
            break;

        case '-':
            console.log(valorA - valorB);
            break;
        case '*':
            console.log(valorA * valorB);
            break;
        case '/':
            console.log(valorA / valorB);
            break;
        default:
            console.log('operador inválido');
            break;
    }
    return;
}

calculadora(2, '+', 3);
calculadora(2, '-', 3);
calculadora(2, '*', 3);
calculadora(2, '/', 3);