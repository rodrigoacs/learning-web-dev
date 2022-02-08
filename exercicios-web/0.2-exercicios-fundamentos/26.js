function removerVogais(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            string = string.replace(string[i], '');
        }
    }
    return console.log(string);
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"