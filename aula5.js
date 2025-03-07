let lanchonete = ["Risolios", "Quibe", "Pastel de Queijo", "Patel de Carne", "Pastel de pizza", "Esfirra", "X-Salada"]
let valores = [8, 6, 10, 10, 12, 16, 24]
contador = 0;
while (contador < lanchonete.length){
    let c2 = contador + 1
    console.log (c2 + " - " + lanchonete[contador] + " R$ " + valores[contador])
    contador = contador + 1;
}