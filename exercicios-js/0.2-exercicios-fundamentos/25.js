function buscarPalavrasSemelhantes(palavraBuscada, arrayPalavras) {
    const arrayNovo = [];
    for (let i = 0; i < arrayPalavras.length; i++) {
        if (arrayPalavras[i].substring(0, palavraBuscada.length) == palavraBuscada) {
            arrayNovo.push(arrayPalavras[i]);
        }
    }
    return console.log(arrayNovo);
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
