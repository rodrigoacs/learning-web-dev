function qtdeNotas(valor) {
    let qtde100 = valor / 100;
    let novaQtde = valor % 100;
    let qtde50 = novaQtde / 50;
    novaQtde = novaQtde % 50;
    let qtde10 = novaQtde / 10;
    novaQtde = novaQtde % 10;
    let qtde5 = novaQtde / 5;
    novaQtde = novaQtde % 5;

    if (parseInt(qtde100)) {
        console.log(`${parseInt(qtde100)} nota(s) de R$ 100,00`);
    }
    if (parseInt(qtde50)) {
        console.log(`${parseInt(qtde50)} nota(s) de R$ 50,00`);
    }
    if (parseInt(qtde10)) {
        console.log(`${parseInt(qtde10)} nota(s) de R$ 10,00`);
    }
    if (parseInt(qtde5)) {
        console.log(`${parseInt(qtde5)} nota(s) de R$ 5,00`);
    }
    if (parseInt(novaQtde)) {
        console.log(`${parseInt(novaQtde)} nota(s) de R$ 1,00`);
    }
}

qtdeNotas(18);
qtdeNotas(85);
qtdeNotas(2341);