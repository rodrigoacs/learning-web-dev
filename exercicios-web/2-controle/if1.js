function aprovado(nota) {
    if (nota >= 7) {
        console.log('aprovado com ' + nota);
    }
}

aprovado(8.1);
aprovado(6.1);

function verdade(valor) {
    if (valor) {
        console.log('é verdadeiro: ' + valor);
    }
}

verdade();
verdade(null);
verdade(undefined);
verdade('');
verdade(0);
verdade(-1);
verdade(' ');
verdade('!');
verdade([]);
verdade([1, 2]);
verdade({});