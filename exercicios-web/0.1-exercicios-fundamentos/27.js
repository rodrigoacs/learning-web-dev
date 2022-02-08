function calculoAltura(altura, taxaDeCrescimento) {
    let anos = 0;
    let maior = [];
    let menor = [];
    if (altura[0] > altura[1]) {
        maior[0] = altura[0];
        maior[1] = taxaDeCrescimento[0];
        menor[0] = altura[1];
        menor[1] = taxaDeCrescimento[1];
    } else {
        maior[0] = altura[1];
        maior[1] = taxaDeCrescimento[1];
        menor[0] = altura[0];
        menor[1] = taxaDeCrescimento[0];
    }

    while (menor[0] < maior[0]) {
        menor[0] += menor[1];
        maior[0] += maior[1];
        console.log(maior[0], menor[0]);
        anos++;
    }

    return anos;
}

let alturas = [150, 120];
let taxas = [2, 3];

console.log(calculoAltura(alturas, taxas));
