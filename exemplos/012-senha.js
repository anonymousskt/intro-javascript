const entrada = require('prompt-sync')();

const senha = 1234;
let senhaDigitada = '';

do {
    senhaDigitada = entrada('Digite sua senha para acessar o sitema!: ');
} while (senha != senhaDigitada);

console.log('Você acessou o sistema');