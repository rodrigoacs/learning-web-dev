function pessoa() {
    this.idade = 0;

    const self = this; // dribla o this variável
    setInterval(function () {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new pessoa;