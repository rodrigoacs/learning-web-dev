const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

//a função forEach pega primeiro o valor do array depois o indice
fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));