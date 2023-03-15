let entrada  = require('prompt-sync')();
/*
    Crie um programa que receba seu nome e sua idade 
    E apresente na saida qual sera sua idade daqui a 25 anos
    Saída - "Rauny daqui a 25 anos sua idade será 50"
*/

let nome = entrada('Digite seu nome: ');
let idade = parseInt(entrada('Digite sua idade: '));

let idade25 = idade + 25;

console.log(nome + ' daqui a 25 anos sua idade será: ' + idade25);

console.log('Pressione ENTER para encerrar!');
entrada();