class Cliente {
    constructor(nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }
    apresentar() {
        return `Olá, eu sou o ${this.nome} `;
    }
}
let c1 = new Cliente("Mateus", 18);
console.log(c1.apresentar());
