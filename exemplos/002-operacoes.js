let entrada  = require('prompt-sync')();
let valor = '';

console.log('Programa que recebe dois números');
valor = entrada('Digite o primeiro número: ');
let n1 = parseFloat(valor);
valor = entrada('Digite o segundo número: ');
let n2 = parseFloat(valor)

let soma = n1 + n2;

let subtracao = n1 - n2;

let multiplicacao = n1 * n2;

let divisao = n1 / n2;

let resto = n1 % n2;

console.log(n1 + ' + ' + n2 + ' = ' + soma);

console.log(n1 + ' - ' + n2 + ' = ' + subtracao);

console.log(n1 + ' / ' + n2 + ' = ' + divisao);

console.log(n1 + ' * ' + n2 + ' = ' + multiplicacao);

console.log(n1 + ' % ' + n2 + ' = ' + resto);


console.log('Pressione ENTER para encerrar!');
entrada();