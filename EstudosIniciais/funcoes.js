// Funções 
 
// Função nomeada
function soma(a, b) {
  return a + b;
}
// Temos uma função que pode ser reutilizada, chamando ela aplicando diferentes parametros
console.log(soma(1, 2)); //3

const value = soma(4.5, 10.5);

console.log(value); //15

// Função anônima
const sum2 = function(a, b) {
  return a + b;
}

console.log(sum2(2, 2)); //4

// Função de seta (arrow function)
const sum3 = (a, b) => {
  return a + b;
}

// Podemos simplificar ainda mais a função de seta, por ela ser uma função de apenas uma linha.

console.log(sum3(2, 5)); //7

// Função de seta simplificada
const sum4 = (a, b) => a + b;

console.log(sum4(4, 5)); //9

//Quando uma arrow function tem uma única linha, esta sendo um retorno da função, podemos omitir as chaves e a palavra return.
// O que vem depois do => é o retorno da função, ou seja, o que ela vai retornar quando for chamada.

const greeting = ((name) => `Hi, ${name}, what's up?`);

//Esta variável recebeu uma arrow function que tem um parametro (name), quando se tem apenas um parametro podemos omitir o parênteses.
//Atenção: caso tenha mais de um parametro, os parênteses são obrigatórios.

console.log(greeting('Elisa'));
console.log(greeting('Ana'));

// Escrevendo a função omitindo os parênteses do parametro.
const greeting2 = (name => `Hi, ${name}, what's up?`);

console.log(greeting2('Olivia'));

const olaMundo = () => 'Olá, mundo!';
// A função não contendo argumentos, precisamos colocar o parenteses para definir como uma função.

console.log(olaMundo()); //Olá, mundo!



