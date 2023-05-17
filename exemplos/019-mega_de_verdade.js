const entrada = require('prompt-sync')();

let resMegaSena = [];
let meuJogo = [];
let acertos = 0;

for (let i = 0; i < 6; i++) {
    let numero = Math.floor(Math.random() * 60) + 1;
    resMegaSena.push(numero);
}


for (let i = 1; i <= 6; i++) {
    let numero = entrada('Digite o ' + i + 'º nº do jogo: ');
    meuJogo.push(numero);
}


for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] == meuJogo[nJogo]) {
            acertos++;
        }
    }
}


let mensagem = 'Resultado do sorteio: '

for (let n = 0; n < resMegaSena.length; n++) {
    mensagem = mensagem + resMegaSena[n] + (resMegaSena.length == n + 1 ? '' : ' - ');
}

// log mostrar resultados
mensagem = 'Seu jogo: '

for (let n = 0; n < meuJogo.length; n++) {
    mensagem = mensagem + meuJogo[n] + (meuJogo.length == n + 1 ? '' : ' - ');
}


console.log(mensagem);
console.log('Você acertou ' + acertos + ' número' + (acertos > 1 ? 's' : ''));