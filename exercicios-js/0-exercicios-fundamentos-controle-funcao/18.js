function escrevePorExtenso(numero) {
    switch (numero) {
        case 1:
            console.log('um');
            break;
        case 2:
            console.log('dois');
            break;
        case 3:
            console.log('tres');
            break;
        case 4:
            console.log('quatro');
            break;
        case 5:
            console.log('cinco');
            break;
        case 6:
            console.log('seis');
            break;
        case 7:
            console.log('sete');
            break;
        case 8:
            console.log('oito');
            break;
        case 9:
            console.log('nove');
            break;
        case 10:
            console.log('dez');
            break;
        default:
            console.log('Número fora do intervalo');
            break;
    }
}

for (let i = 1; i <= 11; i++) {
    escrevePorExtenso(i);
}