/*
   Programa da mega-sena
   Crie um programa que compare o resultado
   de dois arrays
*/ 

let resMegaSena = [5, 15, 25, 35, 45, 55];
let meuJogo = [1, 2, 3, 4, 5, 6];
let acertos = 0;

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] === meuJogo[nJogo]){
            acertos++;
        }
    }
}

console.log('Você acertou ' + acertos + ' número' + (acertos > 1 ? 's' : ''));