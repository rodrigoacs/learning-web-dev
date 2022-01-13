function diaDaSemana(dia) {
    switch (dia) {
        case 1:
        case 7:
            console.log('fim de semana');
            break;

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('dia útil');
            break;

        default:
            console.log('dia inválido');
            break;
    }
}

diaDaSemana(1);
diaDaSemana(7);
diaDaSemana(4);
diaDaSemana(10);