const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//a função forEach recebe 3 parametros
//(valor, indice, array)
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach(nome => { console.log(nome); });

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);