class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    pagarImposto(taxa = 7.5) {
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`);
    }
}
class Secretario extends Funcionario {
}
class Executivo extends Funcionario {
    pagarImposto(taxa = 27.5) {
        console.log(`Executivo paga mais`);
        super.pagarImposto(taxa);
    }
}
let sara = new Secretario("Sara", 2000);
sara.pagarImposto();
let maria = new Executivo("Maria", 3000);
maria.pagarImposto();
