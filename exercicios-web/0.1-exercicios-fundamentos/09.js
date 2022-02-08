function sistemaNotas(nota) {
    let multiplosDe5 = [];
    for (let i = 1; i < 21; i++) {
        multiplosDe5[i - 1] = i * 5;
    }

    if (nota < 38) {
        console.log('reprovado');
        return;
    }
    console.log(`nota real: ${nota}`);

    for (const i in multiplosDe5) {
        if ((nota + 2) == multiplosDe5[i] || (nota + 1) == multiplosDe5[i]) {
            nota = multiplosDe5[i];
        }
    }
    console.log(`nota arredondada: ${nota}`);

}

sistemaNotas(87);