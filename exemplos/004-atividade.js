let entrada  = require('prompt-sync')();


let nome = entrada('Digite o 1º nome: ');
let idade = parseInt(entrada('Digite sua idade: '));

let nome2  = entrada('Digite O 2º nome: ');
let idade2 = parseInt(entrada('Digite sua idade: '));

let nome3  = entrada('Digite O 3º nome: ');
let idade3 = parseInt(entrada('Digite sua idade: '));


let soma = idade + idade2 + idade3;

let divisao = soma / 3;

console.log( 'idade dos 3 calculados é: ' + soma);

console.log('media entre as idade de ' + nome + ' , ' + nome2 + ' , ' + nome3 + ' é ' + divisao.toFixed(1) + 'anos(s)');