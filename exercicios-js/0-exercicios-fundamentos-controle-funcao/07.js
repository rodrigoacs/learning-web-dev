function bhaskara(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
        return console.log('Delta é negativo');
    }
    let resposta = [];
    resposta[0] = (-b + Math.sqrt(delta, 2)) / (2 * a);
    resposta[1] = (-b - Math.sqrt(delta, 2)) / (2 * a);
    return resposta;
}

bhaskara(3, 5, 12);
console.log(bhaskara(4, 2, -6));
