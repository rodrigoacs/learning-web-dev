function formataMoeda(numero) {
    return console.log(`R$${(numero.toFixed(2).toString().replace('.', ','))}`);
}

formataMoeda(0.2 + 0.1);