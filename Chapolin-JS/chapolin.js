const pegaDadoAleatorio = require('./pegaDadoAleatorio');

const viloes = require('./dados/viloes');
const objetos = require('./dados/objetos');
const frasesClassicas = require('./dados/frasesClassicas');

coisasAleatoriasDoMundoChapolin()

function coisasAleatoriasDoMundoChapolin(){
    const DOIS_SEGUNDOS_EM_MS = 2000;

    console.log("");
    console.log("Mais rápido que uma tartaruga");
    console.log("Mais forte que um rato");
    console.log("Mais inteligente que um asno");
    console.log("Ele é o...");
    console.log("");
    setTimeout(() => {
        console.log("CHA PO LIN! ");
        console.log("");
        setTimeout(() => {
         console.log("Vejamos alguns dados aleatórios do mundo do Chapolin");
         console.log("");
          setTimeout(() => {
            console.log(`Vilão: ${pegaDadoAleatorio(viloes)}`);
            console.log(`Objeto: ${pegaDadoAleatorio(objetos)}`);
            console.log(`Frase Clássica: ${pegaDadoAleatorio(frasesClassicas)}`);
            console.log("");
            setTimeout(() => {
              console.log(pegaDadoAleatorio());
              console.log("");
         }, DOIS_SEGUNDOS_EM_MS);
        }, DOIS_SEGUNDOS_EM_MS);
      }, DOIS_SEGUNDOS_EM_MS);
    }, DOIS_SEGUNDOS_EM_MS);
};
