function imparesEntre(inicio = 0, fim = 100) {
    if (fim < inicio) {
        let aux = fim;
        fim = inicio;
        inicio = aux;
    }
    for (let i = inicio; i < fim; i++) {
        if (Number.isInteger(i / 2)) {

        } else {
            console.log(i);
        }
    }
    return;
}

imparesEntre(1, 10);
imparesEntre(10, 1);