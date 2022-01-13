function aumentoSalario(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            console.log(salarioAtual * 1.10);
            break;
        case 'B':
            console.log(salarioAtual * 1.15);
            break;
        case 'C':
            console.log(salarioAtual * 1.20);
            break;
        default:
            console.log('plano inválido');
            break;
    }
}

aumentoSalario('A', 1000);
aumentoSalario('B', 1000);
aumentoSalario('C', 1000);