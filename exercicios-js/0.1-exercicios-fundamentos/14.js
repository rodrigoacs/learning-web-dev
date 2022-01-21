function lojaDeFrutas(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('erro');
            break;
    }
    return;
}

lojaDeFrutas('maçã');
lojaDeFrutas('kiwi');
lojaDeFrutas('melancia');
lojaDeFrutas(1)

