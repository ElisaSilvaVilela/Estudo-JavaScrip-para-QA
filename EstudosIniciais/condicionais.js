// Condicionais 

// If Else

let entregueSemBugs = false;

// Não irá passar no if, pois a variável é false, então foi entregue com bugs.
if (entregueSemBugs) {
    console.log("Woohoo! A entrega foi feita sem bugs!");
} else {
    console.log("Shame! A entrega foi feita com bugs.");
}

// Usando a função para avaliar a entregue, assim podiramos reutilizar o código.
function avaliaSprint(entregueSemBugs){
    if (entregueSemBugs) {
        console.log("Woohoo! A entrega foi feita sem bugs!");
    } else {
        console.log("Shame! A entrega foi feita com bugs.");
    }
}

avaliaSprint(entregueSemBugs);
entregueSemBugs = true;

avaliaSprint(entregueSemBugs); // Woohoo! A entrega foi feita sem bugs!

const sinaleira = 'verde';

if (sinaleira === 'verde') {
    console.log('Pode seguir!');
} else if (sinaleira === 'amarelo') {
    console.log('Atenção!');
} else {
    console.log('Pare!');
}


// Switch case

const expressao = 'Papayas';
switch (expressao) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
        // Pode-se ter dois cases que imprimem a mesma coisa.
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // espera-se como saída: Mangoes and papayas are $2.79 a pound.
        break;
    default:
        console.log(`Sorry, we are out of ${expressao}.`);
        break;
};

// Loops 


// Loop do tipo while
function enfatizaPalavraNVezes(palavra, n){
    let i = 0;
    // while = enquanto
    while (i < n) {
        console.log(`${palavra}!`)
        i++;
    }
}

enfatizaPalavraNVezes('JavaScript', 5);


// Loops em arrays
const saboresDePizza = ['Congumelos', 'Pepperoni', 'Quatro-Queijos'];

for (let e = 0; e < saboresDePizza.length; e++){
    console.log(`Nhumy, pizza de ${saboresDePizza[e]}!`);
}

// Forma mais otimizada e interessante para o mesmo

for (const pizza of saboresDePizza) {
    console.log(`Nhumy, pizza de ${pizza}!`);
}

// Iteradores

// forEach
saboresDePizza.forEach(sabor => {
    console.log(`Nhumy, pizza de ${sabor}!`);
}) // forma mais simplificada de resolver o mesmo problema.


// Map 
const pizzasSaborosas = saboresDePizza.map(sabor => `Pizza de ${sabor}!`);

console.log(pizzasSaborosas); 

// O map retorna um novo array, enquanto o forEach não retorna nada (undefined).


// Filter
const pizzasSemHifem = saboresDePizza.filter(sabor => !sabor.includes('-'));

console.log(pizzasSemHifem); 

// O filter retorna um novo array com os elementos que passaram no teste.


// Reduce
const arrayOfNumbers = [1, 2, 3, 4, 5];

const sum5 = arrayOfNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(`Sum of ${arrayOfNumbers} = ${sum5}`); // Sum of 1,2,3,4,5 = 15

// Outra forma de escrever a mesma função de soma
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const sum6 = arrayOfNumbers.reduce(reducer);

console.log(`Sum of ${arrayOfNumbers} = ${sum6}`); // Sum of 1,2,3,4,5 = 15


// Loops em objetos

const produto = {
    nome: 'iPhone 8',
    preco: 799,
    temGarantia: true
}

// Quero iterar sobre cada propriedade do objeto.

for (propriedade in produto){
    if (typeof produto[propriedade] === 'number'){
        console.log(`${propriedade}: $${produto[propriedade]}`);
    } else {
        console.log(`${propriedade}: ${produto[propriedade]}`);
    }
}

// Libs/modules/packages, reuquire, module.exports.

const meuModulo = require('./meuModule');

// Utilizamos o require para importa o modulo exportado no arquivo meuModule.js.

meuModulo();