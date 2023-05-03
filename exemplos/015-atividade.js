/*
  Crie um programa baseado no exemplo 12 que 
  exiba a mensagem "Bem vindo" caso o usuário 
  digite a senha corretamente e "Usuário Bloqueado" 
  caso o usuário erre a senha 3 vezes.
*/
const entrada = require('prompt-sync')();

let senhaCorreta = "1234";
let tentativas = 0;
let senhaDigitada;

do {
  senhaDigitada = entrada("Digite a senha:");
  tentativas++;

  if (senhaDigitada === senhaCorreta) {
    console.log("Você acessou o sistema");
    break;
  } else if (tentativas === 3) {
    console.log("Usuário Bloqueado");
    break;
  } else {
    console.log("Senha errada tente denovo");
  }
} while (tentativas < 3);