const viloes = [
    'Poucas Trancas',
    'Quase Nada',
    'Tripa Seca',
    'Racha Cuca',
    'Pirata Alma Negra',
    'Rosa Rumorosa'
];

const objetos = [
    'Marreta Biônica',
    'Aerolito',
    'Caderninho de anotações',
    'Chirrin Chirrion do Diabo'
];

const frasesClassicas = [
    'Não contavam com minha astúcia!',
    'Sigam-me os bons!',
    'Minhas anteninhas de vinil estão detectando a presença do inimigo',
    'Palma, palma, não priemos cânico!',
    'Suspeitei desde o princípio!',
    'Aproveitam-se de minha nobreza',
    'Todos os meus movimentos são friamente calculados'
];

coisasAleatoriasDoMundoChapolin()

function coisasAleatoriasDoMundoChapolin(){
    console.log("");
    console.log("Mais rápido que uma tartaruga");
    console.log("Mais forte que um rato");
    console.log("Mais inteligente que um asno");
    console.log("Ele é o...");
    console.log("Mais forte que um rato");
    console.log("");
    console.log("CHA PO LIN! ");
    console.log("");
    console.log("Vejamos alguns dados aleatórios do mundo do Chapolin");
    console.log("");
    console.log(`Vilão: ${pegaDadoAleatorio(viloes)}`);
    console.log(`Objeto: ${pegaDadoAleatorio(objetos)}`);
    console.log(`Frase Clássica: ${pegaDadoAleatorio(frasesClassicas)}`);
    console.log("");
};

function pegaDadoAleatorio(array){
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}