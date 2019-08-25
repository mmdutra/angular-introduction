interface Pessoa {
    idade: number; //atributo obrigatorio
    sexo?: string; //atributo nao obrigatorio
}

function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let joao = { nome: 'Joao', idade: 22};

imprimirIdade(joao);