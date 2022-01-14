function planoDeSaude(idade) {
    if (idade <= 10) {
        console.log('você pagará R$180,00');
        return;
    }
    if (idade > 10 && idade <= 30) {
        console.log('você pagará R$150,00');
        return;
    }
    if (idade > 30 && idade <= 60) {
        console.log('você pagará R$195,00');
        return;
    }
    if (idade > 60) {
        console.log('você pagará R$230,00');
        return;
    }
}

planoDeSaude(10);
planoDeSaude(25);
planoDeSaude(40);
planoDeSaude(70);