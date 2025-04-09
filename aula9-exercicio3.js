const livros = require("./livros.json");

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

//json = JavaScript Object Notation
//Gera  um arquivo json dos livros
function criarArquivo(){
    let livrosTexto = JSON.stringify(livros);
    const fs = require("fs");
    fs.writeFileSync("livros.json", livrosTexto);
}

//criarArquivo();

mostralivros();