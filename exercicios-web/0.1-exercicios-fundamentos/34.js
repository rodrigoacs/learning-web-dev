function comparaStrings(string1, string2) {
    let vetorAux1 = [];
    let vetorAux2 = [];
    for (let i = 0; i < string1.length; i++) {
        vetorAux1[i] = string1[i];
    }
    for (let i = 0; i < string2.length; i++) {
        vetorAux2[i] = string2[i];
    }

    vetorAux1.sort();
    vetorAux2.sort();

    for (let i = 0; i < vetorAux1.length; i++) {
        if (vetorAux1[i] != vetorAux2[i]) {
            return false;
        }
    }
    return true;
}

let stringUm = 'abc';
let stringDois = 'cba';

console.log(comparaStrings(stringUm, stringDois));