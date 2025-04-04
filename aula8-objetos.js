//OBJETOS
let lanches = [
    {
        nome: "x-burguer",
        preco: 50,
        ingredientes: ["pão", "queijo", "hambúrguer"]
    },
    {
        nome: "x-salada",
        preco: 64,
        ingredientes: ["pão", "queijo", "hambúrguer", "salada"]
    },
    {
        nome: "x-tudo",
        preco: 320,
        ingredientes: ["pão", "queijo", "hambúrguer", "salada", "tudo"]
    }
]
console.log("Nome: " + lanches[1].nome + " - Preço: " + lanches[1].preco);
console.log("Ingredientes: " + lanches[1].ingredientes);
//node nome_arquivo.js