// Estruturas Condicionais

const entrada = require('prompt-sync')();

let nome = entrada('Digite Seu Nome: ');
let letra = nome.charAt(0).toLocaleLowerCase;

let vogais = /[aeiou]/; //regex

if (vogais.test(letra)) {
    console.log('A 1ª Letra Do Seu Nome É Uma Vogal!');
    
} else {
    console.log('A 1ª Letra Do Seu Nome É Uma Consoante');
}