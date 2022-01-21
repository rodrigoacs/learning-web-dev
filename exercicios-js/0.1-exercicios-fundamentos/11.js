function bissexto(ano) {
    const teste0 = Number.isInteger(ano / 4);
    let teste1 = true;

    if (Number.isInteger(ano / 100)) {
        if (Number.isInteger(ano / 400)) {
            teste1 = true;
        } else {
            teste1 = false;
        }
    }
    (teste0 && teste1) ?
        console.log(`${ano} é bissexto`) :
        console.log(`${ano} não é bissexto`);
    return teste0 && teste1;
}

bissexto(1988);
bissexto(1700);