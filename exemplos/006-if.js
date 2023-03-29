// Estruturas Condiconais

const entrada = require('prompt-sync')();

let idadeTxt = entrada('Digite Sua Idade: ');
let idade = parseInt(idadeTxt);

if (idade > 18) {
    console.log('Você Tem Mais De 18 Anos! ');
}

if (idade === 18) {
    console.log('Você Tem 18 Anos!');
}

if (idade < 18) {
    console.log('Você Tem Menos De 18 Anos!');
}