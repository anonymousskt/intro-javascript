/*
    Crie um programa que recebe duas notas calcule a média
    entre elas e apresente o texto aprovado caso a média
    seja >=7 e reprovado caso seja menor.
    A nota digitadas devem estar entre 0 e 10!
*/

const entrada = require('prompt-sync')();

const nota1 = parseFloat(entrada('Digite a nota 1: '));
const nota2 = parseFloat(entrada('Digite a nota 2: '));

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
}
  } else {
    console.log("Nota invalida Digite notas entre 0 e 10");
}