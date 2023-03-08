let entrada  = require('prompt-sync')();
/*
    Crie um programa que receba seu nome e sua idade 
    E apresente na saida qual sera sua idade daqui a 25 anos
    Saída - "Rauny daqui a 25 anos sua idade será 50"
*/

let nome = entrada('Digite seu nome: ');
console.log('aperte ENTER para ir pra idade');
entrada();

let idade = entrada('Dgite sua idade: ');
console.log('aperte ENTER para ver tudo');
entrada();

let valor = '';

console.log('Seu nome é: ' + nome);

console.log('Sua idade é: ' + idade);

let soma = idade + 25;

valor = entrada('Sua idade daqui 25 anos é: ' + soma);


console.log('Pressione ENTER para encerrar!');
entrada();