/* Crie um programa que recebe o nome e a nota de 4 matérias.
Exibir o nome das 4 matérias com a nota e a media final
Ex:
Matematica: 7,00
Ingles: 10,00
Geografia: 8,00
Fisica: 8,00
Media: 8,25
*/
const entrada  = require('prompt-sync')();


let materia = entrada('Digite o nome da 1° materia: ');
let nota = parseFloat(entrada('Digite a nota de ' + materia + ': '));

let materia2  = entrada('Digite o nome da 2° materia: ');
let nota2 = parseFloat(entrada('Digite a nota de ' + materia2 + ': '));

let materia3  = entrada('Digite o nome da 3° materia: ');
let nota3 = parseFloat(entrada('Digite a nota de ' + materia3 + ': '));

let materia4 = entrada('Digite o nome da 4° materia: ');
let nota4 = parseFloat(entrada('Digite a nota de ' + materia4 + ': '));


let soma = nota + nota2 + nota3 + nota4;

let divisao = soma / 4;

console.log('Notas: ');
console.log(materia + ': ' + nota);
console.log(materia2 + ': ' + nota2);
console.log(materia3 + ': ' + nota3);
console.log(materia4 + ': ' + nota4);

console.log('media: ' + nota + ' , ' + nota2 + ' , ' + nota3 + ' , ' + nota4 + ' nota: ' + divisao.toFixed(2));