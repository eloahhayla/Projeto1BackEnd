const esportes = ["volei", "badminton", "ping-pong", "futsal", "xadrez", "uno", "damas"]

function mostraModalidades() {
    //código que será executado
    esportes.forEach((esporte) => {
        console.log(esporte)
    })
}

function adicionaEsporte(novoEsporte){
    esportes.push(novoEsporte);
}

mostraModalidades();
adicionaEsporte("queimada");
adicionaEsporte("natação");
console.log("Esportes após adição")
mostraModalidades();

function soma(valor1, valor2) {
    return valor1 + valor2
}
console.log(soma(4,8));