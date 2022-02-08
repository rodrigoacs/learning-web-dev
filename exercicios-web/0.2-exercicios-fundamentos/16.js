function checarAnoBissexto(ano) {
    const teste0 = Number.isInteger(ano / 4);
    let teste1 = true;

    if (Number.isInteger(ano / 100)) {
        if (Number.isInteger(ano / 400)) {
            teste1 = true;
        } else {
            teste1 = false;
        }
    }
    return teste0 && teste1;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));