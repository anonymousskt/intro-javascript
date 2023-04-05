/*
    Crie um programa que recebe 1 nota de 0 a 10 e
    retorne aprovado caso a nota seja maior ou igual a 7 
*/

const entrada = require('prompt-sync')();

const notaTxt = entrada('Digite a nota: ');
const nota = parseFloat(notaTxt);

if (nota >= 7 && nota <= 10) {
  console.log("Aprovado");
} else if (nota < 0 || nota > 10 || isNaN(nota)) {
    if (nota < 0) console.log('A nota não pode ser menor que 0')
    if (nota > 10) console.log('A nota não pode ser maior que 10')
    if (isNaN(nota)) console.log('O valor deve ser numérico')
} else {
  console.log("Reprovado");
}