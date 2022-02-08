function inverter(obj) {
    const novoObj = {};
    Object.entries(obj).forEach(([chave, valor]) => {
        novoObj[valor] = chave;
    });
    return console.log(novoObj);
}

inverter({ a: 1, b: 2, c: 3 }) // retornará { 1: "a", 2: "b", 3: "c"}