function tipoDeTriangulo(l1, l2, l3) {
    if (l1 != l2 && l1 != l3 && l2 != l3) {
        return console.log('escaleno');
    }
    if (l1 == l2 && l2 == l3) {
        return console.log('equilátero');
    }
    if (l1 == l2 || l1 == l3 || l2 == l3) {
        return console.log('isósceles');
    }
}

tipoDeTriangulo(1, 2, 3);
tipoDeTriangulo(1, 1, 1);
tipoDeTriangulo(1, 2, 2);
