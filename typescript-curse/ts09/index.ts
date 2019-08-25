const precos = [10, 23, 9];


//tradicional
const format1 = precos.map(function(preco) {
    return `R$${preco},00`;
});

//arrow function
const format2 = precos.map(preco => 'R$' + preco + ',00' ); 

// console.log(format1);
// console.log(format2);

const acima = precos
            .filter(preco => preco > 20)
            .map( preco => `R$${preco},00`);
console.log(acima);


