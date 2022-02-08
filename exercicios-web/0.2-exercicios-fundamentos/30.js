function recerberMelhorEstudante(obj) {
    let soma = [];
    Object.entries(obj).forEach(([chave, valor]) => {
        for (let i = 0; i < valor.length; i++) {
            soma[i] += valor[i];
        }
    });
    console.log(soma);
}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }