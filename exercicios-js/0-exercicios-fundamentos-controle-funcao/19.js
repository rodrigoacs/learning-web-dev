function cardapio(codigo, qtde) {
    switch (codigo) {
        case 100:
            console.log(`valor total pago: R$${(3 * qtde).toFixed(2)}`);
            break;
        case 200:
            console.log(`valor total pago: R$${(4 * qtde).toFixed(2)}`);
            break;
        case 300:
            console.log(`valor total pago: R$${(5.5 * qtde).toFixed(2)}`);
            break;
        case 400:
            console.log(`valor total pago: R$${(7.5 * qtde).toFixed(2)}`);
            break;
        case 500:
            console.log(`valor total pago: R$${(3.5 * qtde).toFixed(2)}`);
            break;
        case 600:
            console.log(`valor total pago: R$${(2.8 * qtde).toFixed(2)}`);
            break;

        default:
            console.log('código inválido');
            break;
    }
}

cardapio(100, 3);
cardapio(200, 3);
cardapio(300, 3);
cardapio(400, 3);
cardapio(500, 3);
cardapio(600, 3);