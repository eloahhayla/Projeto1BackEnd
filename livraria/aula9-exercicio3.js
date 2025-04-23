const livros = require("../livros.json");

function mostralivros(){
    livros.forEach((livro) => {
        console.log(livro.titulo + " - " + 
            livro.autor + " Ano: " + 
            livro.ano + " Páginas: " +
            livro.paginas + " Preço: R$ " +
            livro.preco
        )
    })
}

function adicionaLivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco){
    livros.push({
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
        sinopse: sinopse,
        paginas: paginas,
        genero: genero,
        preco: preco
    });
    console.log("Livro adicionado com sucesso!")
}

adicionaLivro(
    "A garota que bebeu a lua", 
    "Kelly Barnhill", 
    "Galera", 
    2018, 
    "Uma fábula encantadora sobre aceitação, amor e amadurecimento. Todo ano, o povo do Protetorado deixa um bebê como oferenda para a bruxa da floresta, acreditando que isso os protegerá. No entanto, a bruxa, chamada Xan, é bondosa e cuida dos bebês, alimentando-os com luz estelar. Em uma ocasião, ela acidentalmente dá luz do luar a uma menina, dotando-a de magia extraordinária. A menina, chamada Luna, cresce e descobre seus poderes, enfrentando desafios que podem mudar seu destino e o de todos ao seu redor", 
    308, 
    ["fantasia", "literatura juvenil"], 
    45.01);

//json = JavaScript Object Notation
//Gera  um arquivo json dos livros
function criarArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require("fs");
    fs.writeFileSync("livros.json", livrosTexto);
}

//criarArquivo();
//eloah
mostralivros();