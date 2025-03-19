let salgados = ["Risolios", "Quibe", "Pastel de Queijo", "Patel de Carne", "Pastel de pizza", "Esfirra", "X-Salada"]  
let valores = [8, 6, 10, 10, 13, 16, 24]
contador = 0;

function mostraCardapio() {
    while (contador < salgados.length){
    let c2 = contador + 1
    console.log (c2 + " - " + salgados[contador] + " R$ " + valores[contador])
    contador = contador + 1;
    }
}
function adicionarSalgado(salgado, valor) {
    salgados.push(salgado);
    valores.push(valor);
    console.log(`Salgado "${salgado}" adicionada com sucesso!`);
}

function mostrarPromocao() {
    for (let i = 0; i < salgados.length; i++) {
        let valorDescontado = valores[i] - (valores[i] * 0.05);
        console.log(`${salgados[i]}: R$ ${valorDescontado.toFixed(2)}`);
        
    }
}

mostraCardapio();
adicionarSalgado("Pão de Queijo", 32);
mostraCardapio();
mostrarPromocao();