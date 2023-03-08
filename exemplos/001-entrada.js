// Referência para a biblioteca prompt-sync
let entrada  = require('prompt-sync')();

// O prompt-sync permite capturar dados do teclado

let nome = entrada('Digite seu nome: ');
console.log('O nome digitado foi: ' + nome);